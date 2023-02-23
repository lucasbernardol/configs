import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    browser: false,
    include: ['**/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
