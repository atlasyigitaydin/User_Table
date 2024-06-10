<script setup>
import { ref } from 'vue'

const active = ref(0)

const items = ref([
  { label: 'User', icon: 'pi pi-user' },
  { label: 'Bank Account', icon: 'pi pi-chart-line' },
  { label: 'Products', icon: 'pi pi-list' },
  { label: 'Messages', icon: 'pi pi-inbox' },
])
const userStore = useUsersStore()
</script>

<template>
  <div class="w-full flex justify-content-between pt-2 h-4rem z-5">
    <div class="w-full flex justify-content-center">
      <div style="background-color: var(--surface-0);" class="shadow-6 flex border-round gap-3 py-2 px-3 white-space-nowrap">
        <div v-if="userStore.selectedUser.vip" class="flex flex-column justify-content-around">
          <div class="pi pi-crown flex mx-2 justify-content-center align-items-center text-indigo-400 text-2xl" />
          <label class="flex w-full justify-content-center text-indigo-400"> {{ "VIP" }} </label>
        </div>
        <Image preview width="45" height="45" class="overflow-hidden" :src="userStore.selectedUser.avatar.thumbnail" />
        <div class="w-18rem flex flex-column justify-content-around mr-5">
          <label class="text-xl flex align-items-center"> {{ userStore.selectedUser.fullName }} </label>
          <label class="text-sm text-gray-400 flex align-items-center"> {{ userStore.selectedUser.email }} </label>
        </div>
        <div
          :class="{
            'text-green-500': userStore.selectedUser.social.status === 'Online',
            'text-yellow-500': userStore.selectedUser.social.status === 'Sleep',
            'text-gray-400': userStore.selectedUser.social.status === 'Offline',
            'text-red-400': userStore.selectedUser.social.status === 'Busy',
          }" class="flex gap-2"
        >
          <div
            class="flex justify-content-center align-items-center pi pi-circle-fill"
          />
          <label class="h-full flex align-items-center"> {{ userStore.selectedUser.social.status }} </label>
        </div>
      </div>
    </div>
    <div class="flex shadow-6 h-3rem mr-2">
      <TabMenu v-model:activeIndex="active" class="white-space-nowrap border-round-left" :model="items" />
      <Button class="border-noround h-3rem border-round-right" style="background-color: var(--surface-0);" :icon="`pi pi-${isDark ? 'sun text-yellow-400' : 'moon text-gray-900'}`" link @click="toggleDark()" />
    </div>
  </div>
</template>
