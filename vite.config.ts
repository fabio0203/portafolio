import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Change base to match your GitHub repo name, e.g. '/my-portfolio/'
// Set VITE_BASE_PATH env var at build time to override.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH ?? '/',
})
