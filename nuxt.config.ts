// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtConfig} from '@nuxt/types'
const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api/module']
}
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    ['nuxt3-lazy-load', {
      directiveOnly: true,
    },],
    '@vueuse/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiKey: process.env.NUXT_PUBLIC_API_KEY || "default_api_url",
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: {enabled: true},
  css: ["@/assets/styles/global/index.scss"],
  vite: {
    server: {
      proxy: {
        '/v3/': {
          target: "https://api.sportmonks.com/v3/",
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace('/v3/', ''),
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/vendor/_vars.scss" as *;',
        }
      }
    },

  },
})

