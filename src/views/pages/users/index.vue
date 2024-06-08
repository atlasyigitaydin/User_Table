<script setup lang="ts">
import UsersTable from './widgets/UsersTable.vue'
</script>

<template>
  <UsersTable />
  <div class="w-full h-full flex align-items-start">
    <NavBar />
  </div>
</template>

<route lang="yaml">
name: users
path: /
meta:
  layout: default
</route>
