import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: true,
      },
      pwaAssets: {
        disabled: false,
        config: true,
      },
      manifest: {
        name: 'yap-SplitBoard',
        short_name: 'yap-splitboard',
        description: 'yap-SplitBoard is a nested split dashboard to aggregate small applications.',
        theme_color: '#445566',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
