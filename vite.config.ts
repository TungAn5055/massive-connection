import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import Checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Checker({ typescript: true })],
  server: {
    port: 8809
  },
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    manifest: true,
    chunkSizeWarningLimit: 1000,
    target: ['es2020']
  },
  esbuild: {
    // avoid manual import React
    jsxInject: "import React from 'react'"
  }
})
