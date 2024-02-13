import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { createResolver } from "@nuxt/kit";
import type { RuntimeConfig } from "nuxt/schema";
const { resolve } = createResolver(import.meta.url);
import { defineNuxtConfig } from "nuxt/config";

const runtimeConfig: RuntimeConfig = {
  public: {
    apiBase: "/api",
    backendURL: "http://localhost:3001",
    mock: {
      backend: false,
      apiBase: "/api-mock",
    },
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {},
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
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@vueuse/nuxt",
    (_options: any, nuxt: any) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) => {
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
  imports: {
    dirs: ['stores']
  },
  nitro: {
    routeRules: {
      '/api/**': {proxy: 'http://localhost:3001/api/**'}
    },

  },
  runtimeConfig,
});
