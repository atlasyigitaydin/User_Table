<script setup lang="ts">
definePageMeta({
  name: 'screenshot',
})
const screenshotStore = useScreenShotStore()
</script>

<template>
  <NuxtLayout name="default">
    <div class="w-full h-full flex lg:flex-row flex-col border gap-4 p-4">
      <Filters />

      <div class="overflow-auto w-full">
        <img v-if="screenshotStore.screenshot" class="w-full" :src="screenshotStore.screenshot">
      </div>
    </div>
  </NuxtLayout>
</template>
