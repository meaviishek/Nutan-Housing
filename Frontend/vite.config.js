
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
server: {
    proxy: {
      '/api': {
        target: 'https://nutan-housing-backend.vercel.app',  // Your local backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
 
});
