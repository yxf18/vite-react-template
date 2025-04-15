import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 将 `@` 映射到 `src` 目录
      },
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://192.168.199.102:9642',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: mode !== 'production',
      // 生产环境移除 console
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 将 node_modules 中的代码单独打包
            if (id.includes('node_modules')) {
              return 'vendor'
            }
            // 将组件库单独打包
            if (id.includes('@antd') || id.includes('ant-design')) {
              return 'antd'
            }
          },
          chunkSizeWarningLimit: 1500,
        },
      },
    },
  }
})
