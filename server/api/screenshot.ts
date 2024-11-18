import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'
import { RateLimiterMemory } from 'rate-limiter-flexible'

export default defineEventHandler(async (event) => {
  const rateLimiter = new RateLimiterMemory({
    points: 5, // Her IP'ye 5 istek limiti
    duration: 60, // 60 saniyede 5 istek
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

  // URL ve parametreler
  const query = getQuery(event)
  const url = query.url as string
  const width = Number.parseInt(query.width as string) || 1920
  const deviceScaleFactor = Number.parseFloat(query.deviceScaleFactor as string) || 1

  // IP adresi alımı
  const ip = Array.isArray(event.node.req.headers['x-forwarded-for'])
    ? event.node.req.headers['x-forwarded-for'][0]
    : event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress

  // IP doğrulama
  if (!ip || typeof ip !== 'string') {
    return {
      statusCode: 400,
      message: 'IP adresi alınamadı',
    }
  }

  // URL kontrolü
  if (!url) {
    return {
      statusCode: 400,
      message: 'URL parametresi eksik',
    }
  }

  // İstek sınırını kontrol et
  try {
    await rateLimiter.consume(ip) // IP bazlı sınırlama
  }
  catch (error) {
    return {
      statusCode: 429,
      message: `İstek sınırı aşıldı - ${error}`,
    }
  }

  // Puppeteer ile ekran görüntüsü alma
  try {
    const browser = await puppeteer.launch({
      ignoreDefaultArgs: ['--disable-extensions'],
      args: chromium.args, // Lambda'ya uygun args
      executablePath: await chromium.executablePath(), // Burada await kullanarak asenkron fonksiyonu doğru şekilde çağırıyoruz
      headless: chromium.headless, // Başsız modda çalışacak
      defaultViewport: chromium.defaultViewport, // Varsayılan viewport
    })

    const page = await browser.newPage()

    // Sayfa ayarları
    await page.setViewport({
      width,
      height: 1080,
      deviceScaleFactor,
    })

    // Sayfayı ziyaret et
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.waitForSelector('body')

    // Ekran görüntüsünü al
    const screenshot = await page.screenshot({
      encoding: 'base64',
      fullPage: true,
    })

    await browser.close()

    // Telegram'a bildirim gönder
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
