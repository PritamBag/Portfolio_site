import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",  // Use "/" for custom domain
  build: {
    outDir: "./docs", // Keep docs if you want to deploy from docs folder
  },
})