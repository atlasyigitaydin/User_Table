<script setup lang="ts">
const userStore = useUsersStore()
</script>

<template>
  <div
    v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }"
    class="flex animation-duration-1000 animation-ease-in-out gap-2"
  >
    <div class="flex flex-column gap-2">
      <div
        style="background-color: var(--surface-0);"
        class="flex justify-content-between align-items-center border-round p-2 w-full h-3rem"
      >
        <label class="text-gray-400"> {{ "Iban" }} </label>
        <label class="flex"> {{ userStore.selectedUser?.finance.iban }} </label>
        <div class="flex text-indigo-400 opacity-60 text-3xl align-items-center pi pi-credit-card" />
      </div>
      <CreditCard v-if="userStore.selectedUser?.finance.creditCard" :card="userStore.selectedUser?.finance.creditCard" />
    </div>
    <div class="flex flex-column justify-content-between w-10rem gap-2">
      <div style="background-color: var(--surface-0);" class="border-round h-full">
        .
      </div>
      <div
        style="background-color: var(--surface-0);"
        class="flex flex-column border-round h-full p-1"
      >
        <label class="w-full flex justify-content-end text-gray-400 px-2"> {{ "Bank Account" }} </Label>
      </div>
    </div>
  </div>
</template>
