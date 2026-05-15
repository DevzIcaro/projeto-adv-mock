import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  site: 'https://DevzIcaro.github.io',
  base: '/projeto-adv-mock',

  vite: {
    plugins: [tailwindv4()],
  },
});