<script setup lang="ts">
const userStore = useUsersStore()
</script>

<template>
  <CreditCard v-if="userStore.selectedUser?.creditCard" :card="userStore.selectedUser?.creditCard" />
</template>
