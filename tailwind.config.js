module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
        narrow: ['CustomFontNarrow', 'sans-serif'],
      },
      colors: {
        rosa: "#e6006b",
      }
    },
  },
  plugins: [],
};
