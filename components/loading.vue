<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="loading" class="z-50 fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-950/50">
    <Icon class="text-8xl animate-spin" name="material-symbols-light:control-camera-rounded" />
  </div>
</template>
