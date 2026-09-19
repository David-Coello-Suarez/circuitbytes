# Cómo contribuir

La rama **`produccion`** es la que se despliega: lo que hay en ella es lo que
sirve el servidor. **Nadie escribe en ella directamente**; todo cambio entra por
un pull request verificado.

`startup` es la rama de integración, donde se acumula el trabajo del día a día
antes de publicarlo.

## El flujo

```
feat/x ── PR + check ──▶ startup ── PR + check ──▶ produccion
                      (integracion)             (despliegue)
```

1. **Parte de `startup` actualizada.**

   ```sh
   git checkout startup && git pull
   git checkout -b <tipo>/<descripcion-corta>
   ```

   Prefijos habituales: `feat/`, `fix/`, `ci/`, `docs/`, `refactor/`.

2. **Trabaja y commitea.** Mensajes en imperativo y en español, explicando el
   *porqué* del cambio; el *qué* ya está en el diff.

3. **Sube la rama y abre el PR contra `startup`.**

   ```sh
   git push -u origin <tu-rama>
   gh pr create --base startup --fill
   ```

   La plantilla de PR se rellena sola. Complétala: quien revise no tiene tu
   contexto.

4. **Espera al check `pr`.** Es obligatorio y tarda unos minutos. Comprueba:

   | Paso | Qué atrapa |
   | --- | --- |
   | `pnpm build` | Errores de Astro, TypeScript en `src/data/` o Tailwind |
   | `docker build` | Un `Dockerfile` roto o el lockfile desincronizado |
   | Arranque + peticiones | `nginx.conf` mal, 404 enmascarados, redirecciones que filtran el puerto, cabeceras de seguridad ausentes, proceso corriendo como root |
   | Trivy | CVEs HIGH/CRITICAL **con parche disponible** en la imagen |

   Si falla, el paso de comprobación imprime cada verificación con `ok` o
   `FALLO`: mira ahí antes de volver a subir.

5. **Integra en `startup`** cuando el check esté en verde y las conversaciones
   resueltas. Usa *squash* si la rama tiene commits de ida y vuelta; *merge*
   normal si cada commit se sostiene por sí solo.

## Publicar en `produccion`

Cuando lo acumulado en `startup` esté listo para salir, se abre el segundo PR:

```sh
gh pr create --base produccion --head startup \
  --title "Publica los cambios acumulados en startup"
```

El mismo check vuelve a correr, ahora contra `produccion`. Al mergear, despliega
siguiendo los comentarios de `deploy/circuitbyte-landing.container`: la imagen se
construye en el servidor (`podman build`) y el Quadlet la arranca; el sitio no se
publica solo.

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
