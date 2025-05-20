import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/santiagoalbornozdev/AprendiendoTailwind.git',
  plugins: [react(), tailwindcss()],
})
