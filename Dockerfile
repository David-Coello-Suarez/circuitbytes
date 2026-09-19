# syntax=docker/dockerfile:1
#
# Landing de CircuitByte S.A.S. — sitio Astro 100 % estatico.
# El build genera HTML puro, asi que la imagen final NO lleva Node: solo nginx
# sirviendo archivos. Pensada para Podman rootless detras de un proxy inverso
# que termina el TLS.
#
#   podman build -t circuitbyte-landing:local .
#   podman run -d --rm -p 127.0.0.1:8080:8080 --read-only --cap-drop ALL \
#     --security-opt no-new-privileges --tmpfs /tmp --tmpfs /var/cache/nginx \
#     circuitbyte-landing:local

# ---------- build ----------
FROM node:22-alpine AS build

# engines.node del proyecto exige >=22.12.0.
ENV CI=true \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    PNPM_HOME=/pnpm \
    ASTRO_TELEMETRY_DISABLED=1

WORKDIR /app

# Capa de dependencias aislada: solo manifiestos y lockfile, para que la cache
# sobreviva a cualquier cambio en src/ o public/.
# pnpm-workspace.yaml es obligatorio aqui: contiene allowBuilds (esbuild, sharp)
# y sin el pnpm 10+ bloquea esos postinstall y el build de Astro falla.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack enable && corepack prepare pnpm@11.9.0 --activate

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --store-dir /pnpm/store

COPY astro.config.mjs tsconfig.json ./
COPY src ./src
COPY public ./public

RUN pnpm build

# Precompresion gzip. Las imagenes oficiales de nginx incluyen
# ngx_http_gzip_static_module, asi que se sirve el .gz ya comprimido: mejor
# ratio que gzip en caliente y cero CPU por peticion. Los .woff2 se dejan
# fuera porque ya vienen comprimidos.
RUN find dist -type f \
      \( -name '*.html' -o -name '*.css' -o -name '*.js' \
         -o -name '*.svg' -o -name '*.json' -o -name '*.xml' -o -name '*.txt' \) \
      -exec gzip -9 -k {} \;

# ---------- runner ----------
# nginx-unprivileged ya corre como UID 101, escucha en 8080 y escribe el pid en
# /tmp: no hace falta ningun USER root ni parchear nginx.conf.
# Variante -slim: quita los modulos dinamicos (xslt, geoip, image-filter, njs),
# curl y ca-certificates, que este sitio no usa. Son 5,8 MB de base en lugar de
# 23 MB, y el binario de nginx es el mismo, asi que gzip_static sigue disponible.
FROM nginxinc/nginx-unprivileged:1.29-alpine-slim AS runner

ARG GIT_SHA=unknown
LABEL org.opencontainers.image.title="circuitbyte-landing" \
      org.opencontainers.image.description="Landing estatica de CircuitByte S.A.S." \
      org.opencontainers.image.vendor="CircuitByte S.A.S." \
      org.opencontainers.image.revision="${GIT_SHA}"

# Parches de seguridad del sistema base. La imagen upstream arrastra openssl
# con CVEs ya corregidas aguas arriba. Es el unico tramo que corre como root, y
# se vuelve al UID 101 inmediatamente despues.
USER root
RUN apk upgrade --no-cache libcrypto3 libssl3
USER 101

COPY nginx.conf           /etc/nginx/conf.d/default.conf
COPY security-headers.inc /etc/nginx/conf.d/security-headers.inc

# Sin --chown a proposito: los archivos quedan root:root en modo lectura, de
# forma que el proceso nginx (uid 101) puede leerlos pero nunca modificarlos.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1

# Forma exec: nginx es PID 1 y recibe SIGTERM/SIGQUIT directamente.
CMD ["nginx", "-g", "daemon off;"]

# NOTA sobre configuracion en runtime.
# Los valores que cambian entre entornos (analyticsId, formEndpoint, datos de
# contacto) viven hoy en src/data/company.ts y se hornean en el HTML durante el
# build, asi que cambiarlos exige reconstruir la imagen. No son secretos —son
# datos publicos del sitio—, pero si se quiere configurarlos por entorno:
#   1. en company.ts leer import.meta.env.PUBLIC_ANALYTICS_ID ?? "G-XXXXXXXXXX"
#   2. anadir aqui, en la etapa build:  ARG PUBLIC_ANALYTICS_ID
#                                       ENV PUBLIC_ANALYTICS_ID=$PUBLIC_ANALYTICS_ID
#   3. construir con --build-arg PUBLIC_ANALYTICS_ID=G-REAL
# Nunca copiar un .env ni declarar secretos con ENV en esta imagen.
