
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server:{
    proxy:{
      '/api':'https://nutan-housing-backend.vercel.app'
    },
  },
  plugins: [react()]
 
});
