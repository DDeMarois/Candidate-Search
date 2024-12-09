import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables for the current mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Define your environment variables
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV), // Add custom variables here if needed
    },
    // Plugins should be at the root level
    plugins: [react()],
  };
});
