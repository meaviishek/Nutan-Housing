
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-pdf': 'react-pdf/dist/esm/entry.vite.js',
    },
  },
});
