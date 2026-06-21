import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  publicDir: "public",
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: "./docs",
    emptyOutDir: false,
  },
})
