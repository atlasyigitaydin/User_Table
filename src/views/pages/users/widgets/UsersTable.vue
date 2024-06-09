<script setup lang="ts">
const usersStore = useUsersStore()

onMounted(async () => {
  await usersStore.setUsers()
})

const tableBar = ref<boolean>(true)

const tableBarOpen = () => {
  tableBar.value = !tableBar.value
}

// Geçiş animasyonlarının bittiğini izlemek için ref
const transitionEnded = ref<boolean>(true)

const onTransitionEnd = () => {
  transitionEnded.value = true
}
</script>

<template>
  <div>
    <transition name="slide-fade" @after-leave="onTransitionEnd">
      <DataTable
        v-if="tableBar"
        v-model:selection="usersStore.selectedUser"
        striped-rows
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
              <Image width="100%" height="100%" :src="data.data.avatar.thumbnail" />
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

    <transition v-if="transitionEnded" name="reverse-slide">
      <DataTable
        v-if="!tableBar"
        v-model:selection="usersStore.selectedUser"
        striped-rows
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
              <Image width="100%" height="100%" :src="data.data.avatar.thumbnail" />
            </div>
          </template>
        </Column>
      </DataTable>
    </transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(-100%);
}

.reverse-slide-enter-active, .reverse-slide-leave-active {
  transition: all 0.3s ease;
}

.reverse-slide-enter-from, .reverse-slide-leave-to {
  transform: translateX(100%);
}
</style>
