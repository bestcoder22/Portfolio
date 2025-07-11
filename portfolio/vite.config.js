import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),svgr({
      // optional svgr options
      svgrOptions: {
        icon: true, // set viewBox to "0 0 24 24" etc.
      },
    }),],
  resolve: {
    alias: {
      // tell MUI to use styled-components instead of emotion
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
})
