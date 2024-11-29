export default {
  apps: [
    {
      name: 'nuxt-app',
      script: '.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 8080,
      },
    },
  ],
}
