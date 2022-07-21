import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  build: {
    terserOptions: {
      compress: {
        keep_infinity: true,
        // 生产环境去除 `console` `debugger`
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 1500,
  },
  resolve: {
    alias: [
      {
        find: '@', // 根目录
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false, // 清除打包scss文件警告的问题
        // additionalData: '@import "@/styles/variables.scss";',
        additionalData: ` @import "@/styles/index.scss"; @import "@/styles/variables.scss"; `,
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),

    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  server: {
    port: 8000, //启动端口
    host: true,
    open: false, // 自动打开浏览器
    cors: false, // 跨域设置允许
    strictPort: true, // 如果端口已占用直接退出

    // 设置https  代理
    /* proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path:string) =>  path.replace(/^\/api/,'')
      }
    } */
  },
});
