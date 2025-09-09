import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/karmelsham/',   // <-- your GitHub repo name
  plugins: [react()],
});
