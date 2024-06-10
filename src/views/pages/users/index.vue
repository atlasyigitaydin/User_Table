<script setup lang="ts">
import UsersTable from './widgets/UsersTable.vue'
import Finance from './widgets/Finance.vue'
// import Social from './widgets/Social.vue'
</script>

<template>
  <UsersTable />
  <div v-if="useUsersStore().selectedUser" class="gap-2 flex flex-column w-full h-full flex align-items-start">
    <NavBar />
    <div class="flex flex-wrap h-full overflow-hidden w-full mt-4">
      <Finance />
      <!-- <Social /> -->
    </div>
  </div>
  <div v-else class="w-full h-full flex justify-content-center align-items-center">
    {{ "Please Select User" }}
  </div>
</template>

<route lang="yaml">
name: users
path: /
meta:
  layout: default
</route>
