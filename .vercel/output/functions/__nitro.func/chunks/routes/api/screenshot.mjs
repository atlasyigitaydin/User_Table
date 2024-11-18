import { d as defineEventHandler, a as useRuntimeConfig, g as getQuery } from '../../_/nitro.mjs';
import puppeteer from 'puppeteer';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'node:fs';
import 'node:path';

const screenshot = defineEventHandler(async (event) => {
  const rateLimiter = new RateLimiterMemory({
    points: 5,
    duration: 60
  });
  const runtimeConfig = useRuntimeConfig();
  const telegramConfig = {
    botToken: runtimeConfig.public.telegram.botToken,
    chatId: runtimeConfig.public.telegram.chatId
  };
  const sendToTelegram = async (url2) => {
    const message = `Ekran g\xF6r\xFCnt\xFCs\xFC al\u0131nd\u0131: ${url2 != null ? url2 : "<url_bilgisi_bulunamad\u0131>"}`;
    const telegramUrl = `https://api.telegram.org/bot${telegramConfig.botToken}/sendMessage`;
    await $fetch(telegramUrl, {
      method: "POST",
      body: {
        chat_id: telegramConfig.chatId,
        text: message
      },
      headers: { "Content-Type": "application/json" }
    });
  };
  const query = getQuery(event);
  const url = query.url;
  const width = Number.parseInt(query.width) || 1920;
  const deviceScaleFactor = Number.parseFloat(query.deviceScaleFactor) || 1;
  const ip = Array.isArray(event.node.req.headers["x-forwarded-for"]) ? event.node.req.headers["x-forwarded-for"][0] : event.node.req.headers["x-forwarded-for"] || event.node.req.socket.remoteAddress;
  if (!ip || typeof ip !== "string") {
    return {
      statusCode: 400,
      message: "IP adresi al\u0131namad\u0131"
    };
  }
  if (!url) {
    return {
      statusCode: 400,
      message: "URL parametresi eksik"
    };
  }
  try {
    await rateLimiter.consume(ip);
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.setViewport({
      width,
      height: 1080,
      deviceScaleFactor
    });
    await page.goto(url, {
      waitUntil: "networkidle2"
      /* , timeout: 60000 */
    });
    await page.waitForSelector("body");
    const screenshot = await page.screenshot({
      encoding: "base64",
      fullPage: true
    });
    await browser.close();
    await sendToTelegram(url);
    return {
      screenshot: `data:image/png;base64,${screenshot}`
    };
  } catch (error) {
    return {
      statusCode: error instanceof Error && error.message.includes("Too Many Requests") ? 429 : 500,
      message: "Ekran g\xF6r\xFCnt\xFCs\xFC al\u0131namad\u0131 veya istek s\u0131n\u0131r\u0131 a\u015F\u0131ld\u0131"
    };
  }
});

export { screenshot as default };
//# sourceMappingURL=screenshot.mjs.map
