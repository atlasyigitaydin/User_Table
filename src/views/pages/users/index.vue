<script setup lang="ts">
import UsersTable from './widgets/UsersTable.vue'
import Finance from './widgets/Finance.vue'
</script>

<template>
  <UsersTable />
  <div class="flex flex-column w-full h-full flex align-items-start">
    <NavBar />
    <Finance />
  </div>
</template>

<route lang="yaml">
name: users
path: /
meta:
  layout: default
</route>
