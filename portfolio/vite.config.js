import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // tell MUI to use styled-components instead of emotion
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
})
