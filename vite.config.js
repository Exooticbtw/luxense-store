import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    outDir: 'assets',
    rollupOptions: {
      input: 'src/main.jsx',
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'luxense-store.css'
          return 'luxense-[name][extname]'
        },
        chunkFileNames: 'luxense-[name].js',
        entryFileNames: 'luxense-store.js',
      },
    },
  },
})
