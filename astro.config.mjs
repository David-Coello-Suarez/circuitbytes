// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// URL de producción: alimenta la etiqueta <link rel="canonical"> y Open Graph.
	// TODO: ajustar al dominio real antes de desplegar.
	site: 'https://circuitbits.dev',
});
