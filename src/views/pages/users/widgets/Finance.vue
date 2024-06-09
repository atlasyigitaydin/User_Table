<script setup lang="ts">
const userStore = useUsersStore()
</script>

<template>
  <div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="animation-duration-1000 animation-ease-in-out">
    <CreditCard v-if="userStore.selectedUser?.finance.creditCard" :card="userStore.selectedUser?.finance.creditCard" />
  </div>
</template>
