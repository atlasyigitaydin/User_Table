<script setup lang="ts">
// const items = [
//   { label: 'Anasayfa', name: 'home' },
//   { label: 'Api', name: 'doc' },
// ]
const router = useRouter()
</script>

<template>
  <header
    class="
    fixed top-0 left-0 h-12 w-full
    gap-4 flex items-center px-3 justify-start
   bg-gray-950 text-white shadow-xl fontsize-500 text-lg"
  >
    <button class="flex items-center" @click="router.push({ name: 'home' })">
      <Icon class="text-4xl" name="material-symbols-light:control-camera-rounded" />
    </button>

    <!-- <div class="flex gap-4">
      <div v-for="(item, index) in items" :key="index" class="cursor-pointer" @click="router.push({ name: item.name })">
        {{ item.label }}
      </div>
    </div>

    <div class="cursor-pointer gap-2 flex items-center" @click="router.push({ name: 'screenshot' })">
      {{ "Take a ScreenShot" }}
      <Icon class="text-2xl rotate-180" name="material-symbols-light:photo-camera-outline" />
    </div> -->
  </header>
</template>
