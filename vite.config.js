import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true, 
  },
  server: {
    host: '192.168.4.20',
    port: 5173
  },
})
