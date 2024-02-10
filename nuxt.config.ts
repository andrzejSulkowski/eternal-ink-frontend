import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  hooks: {
  },
  css: [
    // "@/assets/styles/scss/vuetify.scss",
    "vuetify/styles",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/styles/css/tailwind.css",
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
  components: [{ path: "./components", pathPrefix: false }],
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/scss/global.scss";', // Here only mixins and vars should be important that dont translate into permanent css when built
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
