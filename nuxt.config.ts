export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    baseURL: '/',
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
        documentConfig: process.env.NUXT_PUBLIC_FIREBASE_DOCUMENT_CONFIG,
      },
      telegram: {
        botToken: process.env.NUXT_PUBLIC_TELEGRAM_BOT_TOKEN,
        chatId: process.env.NUXT_PUBLIC_TELEGRAM_CHAT_ID,
      },
    },
  },
})
