import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reminder-app/', // Replace 'repository-name' with your GitHub repository name
});