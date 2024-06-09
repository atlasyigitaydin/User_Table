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
  <div class="w-full flex justify-content-end pt-2 z-5">
    <TabMenu v-model:activeIndex="active" class="border-round-left" :model="items" />
    <Button class="border-noround" style="background-color: var(--surface-0);" :icon="`pi pi-${isDark ? 'sun text-yellow-400' : 'moon text-gray-900'}`" link @click="toggleDark()" />
  </div>
</template>
