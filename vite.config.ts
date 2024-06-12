import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['./src/lib/**/*.stories.tsx'],
      include: './src/lib/**/*.tsx',
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    copyPublicDir: false,

    lib: {
      entry: resolve(__dirname, './src/lib/index.ts'),
      name: 'react-beautiful-timeline',
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
});
