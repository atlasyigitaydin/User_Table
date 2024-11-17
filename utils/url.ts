export function removeHttps(url: string): string {
  if (url && url.startsWith('https://')) {
    return url.replace('https://', '')
  }
  return url
}

export function addHttps(url: string): string | undefined {
  if (url && !url.startsWith('https://')) {
    return `https://${url}`
  }
  return url // Başında "https://" varsa olduğu gibi döndür
}

export function isValidUrl(url: string | undefined): boolean {
  if (url) {
    try {
      const parsedUrl = new URL(addHttps(url)!)
      return !!parsedUrl.protocol && !!parsedUrl.hostname
    }
    catch {
      return false
    }
  }
  else {
    return false
  }
}
