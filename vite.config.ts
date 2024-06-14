import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://h1do.github.io/EFood/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      app: path.resolve(__dirname, 'src/app'),
      pages: path.resolve(__dirname, 'src/pages'),
      widgets: path.resolve(__dirname, 'src/widgets'),
      features: path.resolve(__dirname, 'src/features'),
      entities: path.resolve(__dirname, 'src/entities'),
      shared: path.resolve(__dirname, 'src/shared'),
    },
  },
  define: {
    'process.env': process.env,
  },
});
