import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Mantenha suas integrações atuais
  integrations: [react()],
  
  // Adicione as configurações de deploy aqui
  site: 'https://seu-usuario.github.io',
  base: '/nome-do-seu-repositorio', // Importante se o repositório não for o principal

  vite: {
    plugins: [tailwindv4()],
  },
});