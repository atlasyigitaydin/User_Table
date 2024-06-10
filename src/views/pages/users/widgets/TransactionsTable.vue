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
          <Button icon="pi pi-window-maximize" link @click="openTable = !openTable" />
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
  <Transition name="table-openBig">
    <DataTable
      v-if="!openTable"
      :value="userStore.selectedUser?.finance.transactions"
      scroll-height="flex"
      scrollable
      sortable
      responsive-layout="scroll"
      paginator
      :rows="20"
      style="background-color: var(--surface-0);"
      class="shadow-6 opacity-100 overflow-y-hidden absolute z-5 top-0 pb-2 overflow-x-auto surface-border border-1 border-round m-2"
    >
      <template #header>
        <div class="flex justify-content-between w-full">
          <label class="w-15rem">{{ "Credit Card Transactions" }}</label>
          <Button icon="pi pi-window-maximize" link @click="openTable = !openTable" />
        </div>
      </template>
      <Column header="Date" field="date" />
      <Column class="w-10rem" header="Amount">
        <template #body="data">
          <label> {{ `${data.data.amount} ${userStore.selectedUser?.finance.currency.symbol ?? userStore.selectedUser?.finance.currency.code}` }} </label>
        </template>
      </Column>
      <Column header="Description" field="description" />
      <Column header="Depth" field="depth" />
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
  transition: max-height 0.6s ease;
}

.table-open-enter-from, .table-open-leave-to {
    position: absolute;
    bottom: 0;
    max-height: 0;
}

.table-open-enter-to, .table-open-leave-from {
  max-height: 562px;
}

.table-openBig-enter-active, .table-openBig-leave-active {
  transition: max-height 0.6s ease;
}

.table-openBig-enter-from, .table-openBig-leave-to {
    position: absolute;
    bottom: 0;
    max-height: 0;
}

.table-openBig-enter-to, .table-openBig-leave-from {
  max-height: 100%;
}
</style>
