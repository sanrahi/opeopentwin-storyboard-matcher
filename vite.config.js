import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/opentwin-storyboard-matcher/',
  build: {
    outDir: 'dist'
  }
})
