import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "https://rhayes923.github.io/",
  server: {
    port: 3000
  },
})