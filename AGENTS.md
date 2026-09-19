# CLAUDE.md

Guía para trabajar en este repositorio. El idioma del proyecto es el español:
código, contenido, commits y documentación.

## Qué es

Landing estática de **CircuitByte S.A.S.** (Ecuador): software a medida con IA,
integración con SAP, modernización de sistemas heredados y venta de tecnología.
Astro 7 + Tailwind CSS 4, sin framework de UI ni backend. El build produce HTML
puro que sirve nginx dentro de un contenedor.

## Reglas de Código

- **No añadir comentarios al código.** El código debe ser autoexplicativo.
- No escribas docstrings de múltiples párrafos ni bloques de comentarios de varias líneas.
- Como máximo, un comentario corto de una sola línea solo si explica un "por qué" no obvio.
- Si existe comentarios en el codigo, quita los comentarios

Excepción: `Dockerfile`, `nginx.conf` y `security-headers.inc` sí están
comentados a propósito —son la superficie expuesta del sitio y el comentario
justifica cada directiva. No los despojes de comentarios.

## Comandos

```sh
pnpm install            # pnpm 11.9.0, Node >=22.12.0
pnpm dev                # http://localhost:4321
pnpm build              # -> dist/
pnpm preview
pnpm astro check        # tipos de Astro/TypeScript
```

No hay tests ni linter. La verificación real es `pnpm build` más el check `pr`
de CI (build + imagen Docker + peticiones contra el contenedor + Trivy). Para
reproducirlo en local, ver `CONTRIBUTING.md`.

## Arquitectura

```
src/data/*.ts        contenido y configuración tipados
src/components/*     secciones presentacionales que consumen src/data
src/layouts/         Layout.astro (SEO, JSON-LD, Consent) y LegalLayout.astro
src/pages/           index.astro + páginas legales
src/styles/global.css  sistema de diseño completo (@theme de Tailwind 4)
```

**El contenido vive en `src/data/`, nunca dentro de los componentes.** Esa es la
regla estructural del proyecto:

- `company.ts` — identidad, RUC, contacto, nav, `analyticsId`, `formEndpoint`, `calendly`
- `content.ts` — problemas, proceso, beneficios, modelos de precio, FAQ
- `products.ts` — categorías de producto y promesas
- `services.ts`, `cases.ts` — servicios de software y casos

Un componente `.astro` importa su bloque de `src/data` y lo renderiza. Si hay
que cambiar un texto, se cambia en `src/data`; si hay que cambiar la forma, en
el componente. Los tipos (`Step`, `PricingModel`, `FaqItem`, `ProductCategory`…)
se declaran junto a los datos que describen.

`index.astro` monta las secciones en orden narrativo: Hero → Trust → Problem →
Software → Products → Process → Cases → Pricing → About → Faq → Contact. Las
páginas legales (`privacidad`, `cookies`, `aviso-legal`) usan `LegalLayout`.

### Estilos

Tailwind 4 vía `@tailwindcss/vite`, sin `tailwind.config`. Todos los tokens
—color, tipografía, radios, sombra, easing— están en el bloque `@theme` de
`src/styles/global.css`. Al añadir una sección, usa esos tokens; no introduzcas
colores ni fuentes sueltas. El sistema es minimalismo editorial: monocromo
cálido, superficies planas, filete de 1px como separador y un pastel por línea
de negocio. Los grises de texto están calibrados a AA: no los aclares.

Las fuentes son self-hosted (`@fontsource-variable`). Los iconos vienen de
`astro-icon` con `@iconify-json/ph`.

### Analítica y consentimiento

GA4 **no se carga hasta que el visitante acepta** en `Consent.astro`; la
decisión se guarda en `localStorage` bajo `cb-analytics-consent`. Cualquier
script de terceros nuevo debe pasar por ese mismo gate y quedar reflejado en la
CSP de `security-headers.inc`.

### Contenedor y cabeceras

`Dockerfile` es multi-etapa: Node solo en build, imagen final
`nginx-unprivileged` (UID 101, puerto 8080, read-only) sin Node. El HTML se
precomprime con gzip y nginx lo sirve con `gzip_static`.

`nginx.conf` es un sitio multipágina, **no** una SPA: `try_files` sin fallback a
`index.html`, para no enmascarar 404 reales. `absolute_redirect off` y
`port_in_redirect off` evitan filtrar el puerto interno tras el proxy TLS.

`security-headers.inc` define la CSP y se `include` en cada `location` porque
nginx no hereda `add_header`. Si añades un dominio externo (script, form,
imagen), actualiza la CSP o el navegador lo bloqueará en producción.

Si modificas `Dockerfile`, `nginx.conf` o `security-headers.inc`, explica el
motivo en el PR.

## Flujo de trabajo

Dos ramas y solo dos: se trabaja en `startup`, se publica abriendo PR hacia
`produccion` con el check `pr` en verde. No se crean ramas de feature. Commits
en imperativo y en español, explicando el *porqué*. El detalle completo está en
`CONTRIBUTING.md`.

Nunca se commitean `dist/`, `node_modules/`, `graphify-out/` ni secretos: la
imagen no hornea ninguno y debe seguir así.

## Grafo de conocimiento

Existe `graphify-out/` (ignorado por git). Antes de cualquier búsqueda en crudo
sobre el código, consulta `graphify query "<pregunta>"`; un hook PreToolUse
bloquea Grep/rg si no se ha consultado el grafo en los últimos 15 minutos. Usa
`graphify path "<A>" "<B>"` para relaciones y `graphify explain "<concepto>"`
para un concepto concreto. Tras modificar código, ejecuta `graphify update .`.

## Pendientes conocidos

Hay `TODO` vivos en `src/data/company.ts` (teléfono, WhatsApp, LinkedIn,
`formEndpoint` de Formspree, `calendly`) y en `src/data/products.ts` (fotos del
catálogo real). El formulario de contacto degrada a mostrar el correo mientras
`formEndpoint` esté vacío. `astro.config.mjs` fija `site:
https://circuitbyte.ec`, del que dependen canonical y Open Graph.
