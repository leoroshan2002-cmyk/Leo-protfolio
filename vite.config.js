import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to match your exact GitHub repo name
// Your repo: https://github.com/leoroshan2002-cmyk/Leo-protfolio
export default defineConfig({
  plugins: [react()],
  base: '/Leo-protfolio/',
})
