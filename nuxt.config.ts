export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    baseURL: '/',
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_PUBLIC_API_KEY,
      authDomain: process.env.NUXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NUXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NUXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_PUBLIC_APP_ID,
      measurementId: process.env.NUXT_PUBLIC_MEASUREMENT_ID,
      documentConfig: process.env.NUXT_PUBLIC_DOCUMENT_CONFIG,
      botToken: process.env.NUXT_PUBLIC_BOT_TOKEN,
      chatId: process.env.NUXT_PUBLIC_CHAT_ID,
    },
  },
})
