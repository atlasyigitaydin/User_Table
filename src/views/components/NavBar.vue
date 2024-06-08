<script setup>
import { ref } from 'vue'

const active = ref(0)

const items = ref([
  { label: 'User', icon: 'pi pi-user' },
  { label: 'Bank Account', icon: 'pi pi-chart-line' },
  { label: 'Products', icon: 'pi pi-list' },
  { label: 'Messages', icon: 'pi pi-inbox' },
  // { icon: 'pi pi-sun', command: () => { toggleDark() } },
])
</script>

<template>
  <div class="w-full flex justify-content-end pt-2 z-5">
    <TabMenu v-model:activeIndex="active" class="border-round" :model="items" />
  </div>
</template>
