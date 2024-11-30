// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Web Screenshot',
    },
  },
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxt/icon', '@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'node-server',
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
      documentConfig: process.env.DOCUMENT_CONFIG,
      botToken: process.env.BOT_TOKEN,
      chatId: process.env.CHAT_ID,
    },
  },
})
