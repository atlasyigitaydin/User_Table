<script setup lang="ts">
const userStore = useUsersStore()
</script>

<template>
  <DataTable
    :value="userStore.selectedUser?.finance.transactions"
    scroll-height="flex"
    :scrollable="true"
    sortable
    paginator
    :rows="20"
    class="opacity-90 overflow-hidden surface-border border-1 border-round m-2"
  >
    <template #header>
      {{ "Credit Card Transactions" }}
    </template>
    <Column field="amount" />
    <Column field="date" />
    <Column field="description" />
    <Column field="iban" />
    <Column field="name" />
  </DataTable>
</template>
