<script setup lang="ts">
const userStore = useUsersStore()
</script>

<template>
  <div
    class="flex animation-duration-1000 animation-ease-in-out gap-2 w-full px-2"
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
      <div
        style="background-color: var(--surface-0);"
        class="flex flex-column justify-content-between border-round h-full p-1 w-10rem"
      >
        <label class="w-full flex justify-content-end text-gray-400 px-2 text-right"> {{ "Bank Account" }} </Label>
        <label class="text-gray-600 pt-2">{{ "Amount:" }}</label>
        <label class="pl-2">{{ `${userStore.selectedUser?.finance.amount} ${userStore.selectedUser?.finance.currency.symbol}` }}</label>
        <label class="text-gray-600 pt-2">{{ "Currency:" }}</label>
        <label class="pl-2">{{ `${userStore.selectedUser?.finance.currency.name}` }}</label>
        <div class="pi pi-wallet flex align-items-end justify-content-end p-2 text-xl text-indigo-400" />
      </div>
      <div
        style="background-color: var(--surface-0);"
        class="flex flex-column justify-content-between border-round h-full p-1 w-10rem"
      >
        <label class="w-full flex justify-content-end text-gray-400 px-2 text-right"> {{ "Compared to Last Month" }} </Label>
        <div class="flex flex-column justify-content-center align-items-center w-full h-full gap-1">
          <div class="flex align-items-end">
            <label class="text-md text-gray-400 pb-1 pr-1">%</label>
            <label class="text-3xl">{{ userStore.selectedUser?.finance.monthDiffAmount.split('.')[0] }}</label>
            <label class="text-3xl">{{ '.' }}</label>
            <label class="text-3xl">{{ userStore.selectedUser?.finance.monthDiffAmount.split('.')[1] }}</label>
          </div>
          <label v-if="userStore.selectedUser?.finance.liability" class="text-green-400 w-full flex justify-content-end pr-4"> {{ "more" }} </label>
          <label v-else class="text-red-400 w-full flex justify-content-end pr-4"> {{ "less" }} </label>
        </div>
        <div :class="`${userStore.selectedUser?.finance.liability ? 'text-green-400' : 'text-red-400'} pi pi-chart-line flex align-items-end justify-content-end p-2 text-xl`" />
      </div>
    </div>
    <!-- <DataTable class="w-full h-full border-round">
      <Column />
    </DataTable> -->
  </div>
</template>
