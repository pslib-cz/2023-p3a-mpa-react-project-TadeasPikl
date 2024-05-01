import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://pslib-cz.github.io/2023-p3a-mpa-react-project-TadeasPikl',
  build:
  {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
})