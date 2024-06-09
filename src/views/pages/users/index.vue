<script setup lang="ts">
import UsersTable from './widgets/UsersTable.vue'
import Finance from './widgets/Finance.vue'
// import Social from './widgets/Social.vue'
</script>

<template>
  <UsersTable />
  <div class="gap-2 flex flex-column w-full h-full flex align-items-start">
    <NavBar />
    <div class="flex flex-wrap gap-2 w-full">
      <Finance />
      <!-- <Social /> -->
    </div>
  </div>
</template>

<route lang="yaml">
name: users
path: /
meta:
  layout: default
</route>
