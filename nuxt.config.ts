export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  devtools: { enabled: false },
})
