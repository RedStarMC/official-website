import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
  },
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        server: path.resolve(__dirname, 'server.html'),
      }
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: './'
})
