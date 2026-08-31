// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Ship as a client-rendered SPA, preserving the original project's behaviour.
  ssr: false,

  compatibilityDate: '2025-01-01',

  devtools: { enabled: true },

  app: {
    head: {
      title: 'nuxt-project',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
