## Qué cambia

<!-- Una o dos frases: qué hace este PR y por qué. No el "cómo", que ya está en el diff. -->

## Por qué

<!-- El problema o la necesidad que lo motiva. Si hay un issue, enlázalo con "Closes #N". -->

## Cómo lo verificaste

<!-- Qué probaste a mano, más allá de lo que comprueba el check automático.
     Si el cambio es visual, adjunta una captura antes/después. -->

## Notas para quien revisa

<!-- Decisiones discutibles, alternativas que descartaste, deuda que dejas.
     Bórralo si no hay nada que señalar. -->

---

<!--
El check `pr` se ejecuta solo y comprueba, en este orden:
  1. que el sitio compile (pnpm build)
  2. que la imagen del contenedor se construya
  3. que el contenedor sirva bien: las 4 rutas, el 404 real, la redirección
     relativa, gzip, las cabeceras de seguridad y que corra como uid 101
  4. que no haya CVEs HIGH/CRITICAL con parche disponible

Si falla, abre los logs del check antes de volver a subir: el paso de
comprobación imprime cada verificación con "ok" o "FALLO".
-->
