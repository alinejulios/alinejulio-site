import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alinejulio.com',
  // O CSS do site inteiro é pequeno (~7KB gzip); inliná-lo no HTML evita uma
  // requisição de stylesheet bloqueando a renderização inicial.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
