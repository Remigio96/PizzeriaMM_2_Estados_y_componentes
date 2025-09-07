import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PizzeriaMM_2_Estados_y_componentes/', // 👈 importante
})
