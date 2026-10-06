import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// set base to '/<repo>/'. For Vercel or a custom domain, leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
