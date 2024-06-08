<script setup lang="ts">
const usersStore = useUsersStore()
onMounted(async () => {
  await usersStore.setUsers()
})
</script>

<template>
  <DataTable
    v-if="usersStore.users"
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
            'border-green-500': data.data.status === 'Online',
            'border-yellow-500': data.data.status === 'Sleep',
            'border-gray-800': data.data.status === 'Offline',
            'border-red-800': data.data.status === 'Busy',
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
      <template #body="data">
        <div v-if="data.data.status === 'Online'" class="pi pi-circle-fill text-xs text-green-400" />
      </template>
    </Column>
  </DataTable>
</template>
