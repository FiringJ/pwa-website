import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', // 注册更新模式方式  默认是autoUpdate，将会自动更新，其他还有prompt和skipWaiting
      injectRegister: 'auto', // 控制如何在应用程序中注册ServiceWorker 默认值是 'auto' ，其他如：'inline' 则是注入一个简单的注册脚本，内联在应用程序入口点中
      manifest: { // manifest.json 文件配置
        name: 'study pwa',
        icons: [
          {
            src: 'favicon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: './',
        display: 'standalone'
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    https: true
  }
})
