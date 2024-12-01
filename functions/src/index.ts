import { logger } from 'firebase-functions'
import { onRequest } from 'firebase-functions/v2/https'

export const helloWorld = onRequest((request, response) => {
  logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})
