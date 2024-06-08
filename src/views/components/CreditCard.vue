<script setup lang="ts">
const props = defineProps<{
  card: User['creditCard']
}>()

const toast = useToast
</script>

<template>
  <div>
    {{ props.card }}
  </div>
</template>

<style scoped>
</style>
