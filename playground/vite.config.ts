import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/HQ-UI/',
  resolve: {
    alias: {
      'luna-ui': resolve(__dirname, '../packages/luna-ui/src/index.ts'),
    },
  },
  plugins: [vue()],
  server: {
    port: 5173,
  },
})




