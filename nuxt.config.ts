// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
