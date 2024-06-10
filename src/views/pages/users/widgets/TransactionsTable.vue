<script setup lang="ts">
const userStore = useUsersStore()

const openTable = ref<boolean>(true)
</script>

<template>
  <Transition name="table-open">
    <DataTable
      v-if="openTable"
      :value="userStore.selectedUser?.finance.transactions"
      scroll-height="flex"
      scrollable
      sortable
      responsive-layout="scroll"
      paginator
      :rows="20"
      style="background-color: var(--surface-0);"
      class="shadow-6 opacity-90 overflow-y-hidden overflow-x-auto surface-border border-1 border-round m-2"
    >
      <template #header>
        <div class="flex justify-content-between w-full">
          <label class="w-15rem">{{ "Credit Card Transactions" }}</label>
          <Button icon="pi pi-arrow-up" link @click="openTable = !openTable" />
        </div>
      </template>
      <Column header="Date" field="date" />
      <Column class="w-10rem" header="Amount">
        <template #body="data">
          <label> {{ `${data.data.amount} ${userStore.selectedUser?.finance.currency.symbol ?? userStore.selectedUser?.finance.currency.code}` }} </label>
        </template>
      </Column>
      <Column header="Description" field="description" />
      <Column header="IBAN" field="iban" />
      <Column header="Name" field="name" />
      <template #paginatorstart>
        <label class="white-space-nowrap w-10rem"> {{ `Total count: ${userStore.selectedUser?.finance.transactions.length}` }} </label>
      </template>
      <template #paginatorend>
        <div class="w-10rem" />
      </template>
    </DataTable>
  </Transition>
</template>

<style scoped>
.table-open-enter-active, .table-open-leave-active {
  transition: all 0.6s ease;
}

.table-open-enter-from, .table-open-leave-to {
  position: absolute;
  top: 0;
  margin-top: 8rem;
  z-index: 5;
}
</style>
