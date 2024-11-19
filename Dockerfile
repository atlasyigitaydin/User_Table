# 1. Resmi Node.js Görüntüsünü Kullan
FROM node:18-alpine

# 2. Çalışma Dizini Belirle
WORKDIR /app

# 3. pnpm'i Kur
RUN npm install -g pnpm

# 4. Paket Bağımlılıklarını Kopyala
COPY package.json pnpm-lock.yaml ./

# 5. Bağımlılıkları Kur
RUN pnpm install --frozen-lockfile

# 6. Uygulama Kodlarını Kopyala
COPY . .

# 7. Ortam Değişkenlerini Ayarla (opsiyonel)
ENV NODE_ENV production

# 8. Uygulamayı Başlat
CMD ["pnpm", "dev"]
