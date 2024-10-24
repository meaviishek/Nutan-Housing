
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
devServer: {
    proxy: {
      '/api': {
        target: 'https://nutan-housing-32ig.onrender.com',  // Your local backend server
        changeOrigin: true,
    
      },
    },
  },
  plugins: [react()],
 
});
