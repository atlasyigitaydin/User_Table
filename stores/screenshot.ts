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
    await fetch(
      `/api/screenshot?url=https://${removeHttps(url.value)}&width=${width.value}&deviceScaleFactor=${deviceScaleFactor.value}`,
    )
      .then(response => response.json())
      .then((data) => {
        screenshot.value = data.screenshot
      })
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
