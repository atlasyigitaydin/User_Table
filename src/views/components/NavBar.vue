<script setup>
import { ref } from 'vue'

const active = ref(0)

const items = ref([
  { label: 'User', icon: 'pi pi-user' },
  { label: 'Bank Account', icon: 'pi pi-chart-line' },
  { label: 'Products', icon: 'pi pi-list' },
  { label: 'Messages', icon: 'pi pi-inbox' },
])
</script>

<template>
  <div class="w-full flex justify-content-center pt-2">
    <TabMenu v-model:activeIndex="active" class="border-round" :model="items" />
  </div>
</template>
