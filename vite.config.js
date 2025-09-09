import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/karmelsham/',   // <-- اسم الريبو على GitHub
  plugins: [react()],
});
