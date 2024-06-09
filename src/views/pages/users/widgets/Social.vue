<script setup lang="ts">
const userStore = useUsersStore()
</script>

<template>
  <div>
    <Chat v-if="userStore.selectedUser" :user="userStore.selectedUser" />
  </div>
</template>
