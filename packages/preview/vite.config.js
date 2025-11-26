import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat all tags starting with 'icon-' as custom elements
          isCustomElement: (tag) => tag.startsWith('icon-')
        }
      }
    })
  ],
})
