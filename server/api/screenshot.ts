import chromium from 'chrome-aws-lambda'
// import puppeteer from 'puppeteer-core'

import { RateLimiterMemory } from 'rate-limiter-flexible'

export default defineEventHandler(async (event) => {
  const rateLimiter = new RateLimiterMemory({
    points: 5,
    duration: 60,
  })

  const runtimeConfig = useRuntimeConfig()
  const telegramConfig = {
    botToken: runtimeConfig.public.botToken,
    chatId: runtimeConfig.public.chatId,
  }

  const sendToTelegram = async (url: string) => {
    const message = `Ekran görüntüsü alındı: ${url ?? '<url_bilgisi_bulunamadı>'}`
    const telegramUrl = `https://api.telegram.org/bot${telegramConfig.botToken}/sendMessage`

    await $fetch(telegramUrl, {
      method: 'POST',
      body: {
        chat_id: telegramConfig.chatId,
        text: message,
      },
      headers: { 'Content-Type': 'application/json' },
    })
  }
  const query = getQuery(event)
  const url = query.url as string
  const width = Number.parseInt(query.width as string) || 1920
  const deviceScaleFactor = Number.parseFloat(query.deviceScaleFactor as string) || 1

  const ip = Array.isArray(event.node.req.headers['x-forwarded-for'])
    ? event.node.req.headers['x-forwarded-for'][0]
    : event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress

  if (!ip || typeof ip !== 'string') {
    return {
      statusCode: 400,
      message: 'IP adresi alınamadı',
    }
  }

  if (!url) {
    return {
      statusCode: 400,
      message: 'URL parametresi eksik',
    }
  }

  try {
    await rateLimiter.consume(ip)
      .catch((error) => {
        return {
          statusCode: 429,
          message: `İstek sınırı aşıldı - ${error}`,
        }
      })

    const browser = await chromium.puppeteer.launch({
      ignoreDefaultArgs: ['--disable-extensions'],
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      defaultViewport: chromium.defaultViewport,
    })

    const page = await browser.newPage()

    await page.setViewport({
      width,
      height: 1080,
      deviceScaleFactor,
    })

    await page.goto(url, { waitUntil: 'networkidle2'/* , timeout: 60000 */ })
    await page.waitForSelector('body')

    const screenshot = await page.screenshot({
      encoding: 'base64',
      fullPage: true,
    })

    await browser.close()

    await sendToTelegram(url)

    return {
      screenshot: `data:image/png;base64,${screenshot}`,
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      message: `Ekran görüntüsü alınamadı - ${error}`,
    }
  }
})
