# Cabeceras de seguridad comunes.
# Se incluye en cada location porque nginx no hereda add_header hacia un
# bloque que declare sus propias cabeceras.
# Extension .inc a proposito: nginx.conf de la imagen carga conf.d/*.conf, y
# este fragmento no debe cargarse como configuracion independiente.

add_header X-Content-Type-Options    "nosniff"                         always;
add_header X-Frame-Options           "DENY"                            always;
add_header Referrer-Policy           "strict-origin-when-cross-origin" always;
add_header Cross-Origin-Opener-Policy   "same-origin"                  always;
add_header Cross-Origin-Resource-Policy "same-origin"                  always;
add_header Permissions-Policy
  "geolocation=(), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()"
  always;

# HSTS lo emite el proxy inverso que termina el TLS; duplicarlo aqui solo
# genera cabeceras repetidas. Descomentar SOLO si este contenedor pasa a
# servir HTTPS directamente:
# add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# CSP ajustada a lo que el sitio usa de verdad:
#   - googletagmanager: Google Analytics, cargado solo tras consentimiento
#     (src/components/Consent.astro).
#   - formspree.io: destino del formulario de contacto (src/components/Contact.astro).
#   - 'unsafe-inline' en script-src es deuda conocida: Consent.astro usa
#     <script is:inline define:vars> y el JSON-LD del Layout tambien es inline.
#     Via de salida: activar experimental.csp en astro.config.mjs para que
#     Astro emita hashes, y sustituir 'unsafe-inline' por ellos.
add_header Content-Security-Policy
  "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com; form-action 'self' https://formspree.io; manifest-src 'self'; upgrade-insecure-requests"
  always;
