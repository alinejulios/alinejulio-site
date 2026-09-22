import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alinejulio.com',
  integrations: [sitemap()],
  // O CSS do site inteiro é pequeno (~7KB gzip); inliná-lo no HTML evita uma
  // requisição de stylesheet bloqueando a renderização inicial.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
