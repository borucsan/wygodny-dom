// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    pageTransition: { mode: 'out-in' },
  },
  modules: ["@nuxt/fonts", "@nuxt/eslint", "@morev/vue-transitions/nuxt", "@nuxt/ui", "@samk-dev/nuxt-vcalendar", '@vueuse/nuxt', '@nuxt/scripts', "@sentry/nuxt/module", 'nuxt-gtag'],

  colorMode: {
    preference: 'light'
  },
  gtag: {
    id: 'G-X66CB01M7N'
  },
  eslint: {
    config: {
      stylistic: true // <---
    }
  },
  fonts: {
    defaults: {
      weights: [400, 500, 700, 800, 900],
      styles: ['normal'],
      subsets: [
      ]
    },
    families: [
      { name: 'Barlow', provider: 'google' },
      { name: 'Poppins', provider: 'google' },
    ]
  },

  devServer: {
    port: 3050,
  },

  runtimeConfig: {
    public: {
      environment: '',
      sentrydsn: '',
      apiBase: process.env.ENV === 'production' ? 'https://wygodny-dom.pl/' : process.env.ENV === 'staging' ? 'https://wygodny-dom.dkarwot.me/' : 'http://localhost:3666/public/',
    }
  },
  compatibilityDate: '2024-07-23'
})