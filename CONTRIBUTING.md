# Cómo contribuir

El repositorio tiene **dos ramas, y solo dos**:

| Rama | Para qué |
| --- | --- |
| `startup` | Donde se trabaja. Es la rama por defecto. |
| `produccion` | Lo que se despliega. **Nadie escribe en ella directamente.** |

Publicar es abrir un pull request de `startup` hacia `produccion` y que el check
`pr` quede en verde.

## El flujo

```
startup ── commits ── push ── PR + check ──▶ produccion
(trabajo)                                   (despliegue)
```

1. **Trabaja en `startup`.**

   ```sh
   git checkout startup && git pull
   ```

2. **Commitea.** En imperativo y en español, explicando el *porqué* del cambio;
   el *qué* ya está en el diff. **El asunto lleva prefijo**, porque de ahí sale
   la versión (ver [Versionado](#versionado)):

   ```
   feat: anade el formulario de contacto
   fix(nginx): corrige la redireccion de directorio
   docs: documenta el flujo de publicacion
   ```

3. **Sube.** Cada push a `startup` dispara el check, así que sabes cómo está la
   rama antes de publicar:

   ```sh
   git push
   ```

4. **Abre el PR de publicación cuando lo acumulado esté listo para salir.**

   ```sh
   gh pr create --base produccion --head startup \
     --title "Publica los cambios acumulados en startup"
   ```

   La plantilla de PR se rellena sola. Complétala: resume qué sale en esta
   tanda.

5. **Espera al check `pr`.** Es obligatorio y tarda unos minutos. Comprueba:

   | Paso | Qué atrapa |
   | --- | --- |
   | `pnpm build` | Errores de Astro, TypeScript en `src/data/` o Tailwind |
   | `docker build` | Un `Dockerfile` roto o el lockfile desincronizado |
   | Arranque + peticiones | `nginx.conf` mal, 404 enmascarados, redirecciones que filtran el puerto, cabeceras de seguridad ausentes, proceso corriendo como root |
   | Trivy | CVEs HIGH/CRITICAL **con parche disponible** en la imagen |

   Si falla, el paso de comprobación imprime cada verificación con `ok` o
   `FALLO`: mira ahí antes de volver a subir.

6. **Mergea** cuando el check esté en verde y las conversaciones resueltas. Usa
   *merge* normal: cada commit de `startup` ya se sostiene por sí solo, y así
   `produccion` conserva el historial de lo que salió.

## Versionado

Al mergear en `produccion`, y **solo si el check `pr` quedó en verde**, el
workflow `release` calcula la versión leyendo los commits desde el último tag,
publica la imagen en GHCR (`vX.Y.Z`, el sha corto y `prod`), la escanea con
Trivy, crea el tag y publica el GitHub Release con sus notas.

La imagen se sube **antes** de etiquetar: si el registro falla, no queda un tag
apuntando a una versión que nadie puede desplegar.

| El asunto empieza por | Sube |
| --- | --- |
| `feat!:` · `fix!:` · o `BREAKING CHANGE` en el cuerpo | mayor (`1.4.2` → `2.0.0`) |
| `feat:` | menor (`1.4.2` → `1.5.0`) |
| `fix:` · `perf:` | parche (`1.4.2` → `1.4.3`) |
| `docs:` · `chore:` · `ci:` · `refactor:` · `style:` · `test:` | nada |

Gana el salto mayor de toda la tanda. Si ningún commit pide versión —una tanda
solo de `docs:`, por ejemplo— no se publica release, y el resumen de la
ejecución lo dice. La primera publicación crea `v0.1.0` como línea base.

**El tag es la fuente de verdad de la versión**, no `package.json`: ese campo se
queda en `0.0.1` y no se usa. Escribirlo desde CI obligaría a commitear en
`produccion`, que es justo lo que el flujo impide.

## Después de mergear: desplegar

El sitio **no se publica solo**. El release deja la imagen lista en
`ghcr.io/david-coello-suarez/circuitbytes`, ya escaneada; desplegarla es un paso
manual en el servidor:

```sh
podman pull ghcr.io/david-coello-suarez/circuitbytes:vX.Y.Z
sed -i 's|^Image=.*|Image=ghcr.io/david-coello-suarez/circuitbytes:vX.Y.Z|' \
  ~/.config/containers/systemd/circuitbyte-landing.container
systemctl --user daemon-reload
systemctl --user restart circuitbyte-landing
```

El propio release trae estos comandos ya rellenados con su versión.

El Quadlet fija un **tag de versión, nunca `prod`**: así el archivo dice qué está
sirviendo el servidor, y un reinicio no arrastra una versión que nadie decidió
desplegar. El paquete es privado, así que el servidor necesita `podman login
ghcr.io` una vez, con un token que tenga `read:packages`.

## Sobre las ramas

No se crean ramas de feature. Si necesitas aislar un experimento, hazlo en local
y no lo subas: el remoto tiene `startup` y `produccion`, y nada más.

## Ejecutar las comprobaciones en local

Antes de abrir el PR puedes correr lo mismo que el check, y así no gastas una
vuelta de CI:

```sh
pnpm install --frozen-lockfile
pnpm build

docker build -t landing:local .
docker run -d --rm --name landing-local -p 127.0.0.1:8080:8080 \
  --read-only --cap-drop ALL --security-opt no-new-privileges \
  --tmpfs /tmp --tmpfs /var/cache/nginx landing:local

curl -sI http://127.0.0.1:8080/privacidad | grep -i location   # -> /privacidad/
curl -s  http://127.0.0.1:8080/healthz                          # -> ok
docker rm -f landing-local
```

El servidor de desarrollo, para el trabajo del día a día:

```sh
pnpm dev     # http://localhost:4321
```

## Si tocas código

Hay un grafo de conocimiento del repositorio en `graphify-out/` (ignorado por
git). Después de modificar código, regenéralo:

```sh
graphify update .
```

## Qué no entra en un PR

- Secretos, `.env` o credenciales: la imagen no hornea ninguno y debe seguir así.
- `dist/`, `node_modules/` o `graphify-out/`: están en `.gitignore`.
- Cambios en `Dockerfile`, `nginx.conf` o `security-headers.inc` sin explicar el
  motivo en el PR. Son la superficie expuesta del sitio.

## Activar la protección de `produccion`

Mientras esto no se ejecute, el check `pr` informa pero **no bloquea**: se puede
mergear en rojo o empujar directo a `produccion`. El comando exige que el check
esté en verde y que la rama esté al día antes de integrar, y `enforce_admins`
hace que la regla aplique también a quien administra el repositorio:

```sh
gh api -X PUT repos/David-Coello-Suarez/circuitbytes/branches/produccion/protection \
  -f 'required_status_checks[strict]=true' \
  -f 'required_status_checks[contexts][]=pr' \
  -F 'enforce_admins=true' \
  -F 'required_pull_request_reviews=null' \
  -F 'restrictions=null'
```

Ejecútalo cuando el workflow ya exista en `produccion` y haya corrido al menos
una vez: GitHub solo ofrece como required los checks que ha visto antes.
