export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  devtools: { enabled: false },
  compatibilityDate: '2025-06-24',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
})
