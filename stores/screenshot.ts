interface ScreenshotResponse {
  screenshot?: string
  statusCode?: number
  message?: string
}

export const useScreenShotStore = defineStore('screenshot', () => {
  const firebase = useFirebaseStore()

  const screenshot = ref<string>()
  const url = ref()
  const width = ref(1920)
  const deviceScaleFactor = ref<1 | 2 | 3>(1)
  const loading = ref<boolean>(false)

  const fetchSs = async () => {
    loading.value = true
    await firebase.incrementCount()

    const { data } = await useAsyncData<ScreenshotResponse>('screenshot', () =>
      $fetch(`/api/screenshot?url=https://${removeHttps(url.value)}&width=${width.value}&deviceScaleFactor=${deviceScaleFactor.value}`))

    if (data.value && data.value.screenshot) {
      screenshot.value = data.value.screenshot
    }
    else {
      console.error('Ekran görüntüsü alınamadı:', data.value?.message)
    }

    loading.value = false
  }

  const download = () => {
    if (screenshot.value) {
      const link = document.createElement('a')
      link.href = screenshot.value
      link.download = `${removeHttps(url.value)}.png`
      link.click()
    }
  }

  return {
    url,
    width,
    deviceScaleFactor,

    loading,

    fetchSs,
    download,

    screenshot,
  }
})
