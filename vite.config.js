import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import ViteImages from "vite-plugin-vue-images";
import viteCompression from 'vite-plugin-compression';
// import basicSsl from '@vitejs/plugin-basic-ssl'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    Vue(),
    ViteImages({
      dirs: ["src/assets/images"],
      exclude: [], // No excluir nada explícitamente
      caseSensitive: true, // Hacer que sea sensible a mayúsculas
    }),
    viteCompression(),
    // basicSsl()
  ],
  server: {
    host:true,
    // https: true,
    proxy: {
      // "/api":{
      //    target: "https://api.geoiplookup.net",
      //   changeOrigin: true,
      //   secure: false,
      //   ws: true,
      // },
      "/dapi": {
        // target: "http://192.168.0.105:3006/",
        target: "https://leads.impulse.ky/",
        // target: "https://api.geoiplookup.net",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/blog": {
        target: "https://impulse.ky/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/blog/, '/blog'),
      },

    }
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".css"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-vue': ['vue', 'vue-router', 'pinia'],
          'vendor-ui': ['swiper', '@headlessui/vue', 'vue-toastification'],
          'vendor-forms': ['vee-validate', 'yup', 'vue-tel-input'],
          'vendor-utils': ['axios', 'dayjs', 'gsap'],
        }
      }
    },
    chunkSizeWarningLimit: 500,
  }
});
