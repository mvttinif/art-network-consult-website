import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Warn on chunks > 500KB
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — cached separately, rarely changes
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation library — moderately sized
          'vendor-motion': ['framer-motion'],
          // Swiper — only loaded when Portfolio section is visible
          'vendor-swiper': ['swiper'],
        },
      },
    },
  },
})
