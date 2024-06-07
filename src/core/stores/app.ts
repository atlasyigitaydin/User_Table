export const useAppStore = defineStore('App Store', () => {
  const screenSize = ref(window.innerWidth)

  const updateScreenSize = () => {
    screenSize.value = window.innerWidth
  }

  const responsive = computed(() => {
    return screenSize.value < 700
  })

  onMounted(() => {
    window.addEventListener('resize', updateScreenSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize)
  })

  const theme = computed(() => isDark.value)
  return {
    responsive,
    theme,
  }
})
