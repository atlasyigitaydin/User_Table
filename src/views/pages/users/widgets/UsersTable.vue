<script setup lang="ts">
const usersStore = useUsersStore()

onMounted(async () => {
  await usersStore.setUsers()
})

const tableBar = ref<boolean>(true)
const tableBarSmall = ref<boolean>(false)

const tableBarOpen = () => {
  tableBar.value = !tableBar.value
}
</script>

<template>
  <div>
    <transition name="slide" @after-leave="tableBarSmall = true">
      <DataTable
        v-if="tableBar"
        v-model:selection="usersStore.selectedUser"
        :row-hover="true"
        :header="false"
        :value="usersStore.users"
        scrollable
        class="opacity-90"
        scroll-height="flex"
        selection-mode="single"
        style="min-width: 300px;"
      >
        <Column header="Avatar">
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

        <Column header="Name" field="fullName" />
        <Column>
          <template #body="data">
            <div v-if="data.data.vip" class="pi pi-crown text-indigo-400" />
          </template>
        </Column>
        <Column>
          <template #header>
            <Button icon="pi pi-arrow-left" link class="w-full h-full justify-content-center align-items-center flex" @click="tableBarOpen" />
          </template>
          <template #body="data">
            <div v-if="data.data.social.status === 'Online'" class="pi pi-circle-fill text-xs text-green-400" />
          </template>
        </Column>
      </DataTable>
    </transition>

    <transition name="slide" @after-leave="tableBar = true">
      <DataTable
        v-if="tableBarSmall"
        v-model:selection="usersStore.selectedUser"
        :row-hover="true"
        :header="false"
        :value="usersStore.users"
        scrollable
        class="opacity-90"
        scroll-height="flex"
        selection-mode="single"
        style="min-width: 80px;"
      >
        <Column>
          <template #header>
            <Button icon="pi pi-arrow-right" link class="w-2rem h-2rem justify-content-center align-items-center flex" @click="tableBarOpen" />
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
      </DataTable>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to, .slide-leave-from {
  transform: translateX(0%);
}
</style>
