<script setup lang="ts">
const screenShotStore = useScreenShotStore()
</script>

<template>
  <div class="fixed top-12 left-0 w-full text-white animate-pulse z-50 h-12 flex justify-center items-center">
    <div class="bg-red-600 font-bold rounded px-3 py-2">
      SYSTEM ERROR!
    </div>
  </div>

  <Loading :loading="screenShotStore.loading" />
  <NuxtPage />
</template>
