import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import compression from 'vite-plugin-compression'
import imagemin from 'vite-plugin-imagemin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'src/assets/*', dest: 'dist/assets' }
      ],
      hook: 'writeBundle'
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    imagemin({
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.8] },
      svgo: { plugins: [{ removeViewBox: false }] }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets')
    }
  },
  assetsInclude: ['**/*.png'],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV !== 'production', // true,
    assetsDir: 'assets',
    rollupOptions: {
      // ESTRUTURA ANTERIOR EM ULTIMO CASO COMENTAR DO "OUTPUT ATÉ '},' 
      // input: {
      //   main: resolve(__dirname, 'index.html'),
      // },
      // output: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          },
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 5173,
    open: true
  } 
})