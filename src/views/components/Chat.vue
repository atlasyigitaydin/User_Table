<script setup lang="ts">
import type { User } from '~/core/types'

defineProps<{
  user: User
}>()
</script>

<template>
  <div style="width: 800px; height: 700px; background-color: var(--surface-0);" class="border-round">
    {{ user }}
  </div>
</template>
