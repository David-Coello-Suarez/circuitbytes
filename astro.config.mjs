// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	// URL de producción: alimenta la etiqueta <link rel="canonical"> y Open Graph.
	// TODO: ajustar al dominio real antes de desplegar.
	site: 'https://circuitbits.dev',
});
