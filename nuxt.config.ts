//import { resolve } from "path";
import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    // 'vite:extendConfig': (config) => {
    //   config.plugins.push(
    //     vuetify({
    //       styles: { configFile: resolve('./assets/styles/scss/vuetify.scss') },
    //     })
    //   )
    // }
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    "vuetify/lib/styles/main.sass",
    "@/assets/styles/css/tailwind.css",
    "@/assets/styles/scss/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  components: [{ path: "./components", pathPrefix: false }],
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/styles/scss/main.scss";',
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname),
        "~": resolve(__dirname),
      },
    },
  },
});
