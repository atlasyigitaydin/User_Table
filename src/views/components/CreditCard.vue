<script setup lang="ts">
import { User } from '~/core/types';
const props =defineProps<{
  card: User['creditCard']
}>()
</script>

<template>
  <div>
    {{ props.card }}
  </div>
</template>

<style scoped>
</style>
