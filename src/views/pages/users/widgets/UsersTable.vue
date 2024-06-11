<script setup lang="ts">
const usersStore = useUsersStore()

const tableBar = ref<boolean>(true)
</script>

<template>
  <transition name="slide">
    <DataTable
      v-model:selection="usersStore.selectedUser"
      :row-hover="true"
      :header="false"
      :value="usersStore.users"
      scrollable
      class="opacity-90"
      scroll-height="flex"
      selection-mode="single"
    >
      <Column>
        <template #header>
          <Button v-if="!tableBar" icon="pi pi-arrow-right" link class="w-2rem h-2rem justify-content-center align-items-center flex" @click="tableBar = !tableBar" />
          <label v-else> {{ "Avatar" }} </label>
        </template>
        <template #body="data">
          <div
            v-tooltip="data.data.status"
            :class="{
              'border-green-500': data.data.social.status === 'Online',
              'border-yellow-500': data.data.social.status === 'Sleep',
              'border-gray-800': data.data.social.status === 'Offline',
              'border-red-800': data.data.social.status === 'Busy',
            }"
            class="relative border-3 border-circle overflow-hidden w-3rem h-3rem"
          >
            <Image width="45" height="45" :src="data.data.avatar.thumbnail" />
          </div>
        </template>
      </Column>

      <Column v-if="tableBar" header="Name" field="fullName" />
      <Column v-if="tableBar">
        <template #body="data">
          <div v-if="data.data.vip" class="pi pi-crown text-indigo-400" />
        </template>
      </Column>
      <Column v-if="tableBar">
        <template #header>
          <Button icon="pi pi-arrow-left" link class="w-full h-full justify-content-center align-items-center flex" @click="tableBar = !tableBar" />
        </template>
        <template #body="data">
          <div v-if="data.data.social.status === 'Online'" class="pi pi-circle-fill text-xs text-green-400" />
        </template>
      </Column>
    </DataTable>
  </transition>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to, .slide-leave-from {
  transform: translateX(0%);
}
</style>
