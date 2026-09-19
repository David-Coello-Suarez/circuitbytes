// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // URL de produccion: alimenta canonical y Open Graph.
  // TODO: ajustar al dominio real antes de desplegar.
  site: 'https://davidcoello.dev',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
