<script setup lang="ts">
const userStore = useUsersStore()

const openTable = ref<boolean>(true)

const dateGetter = (_date: Date) => {
  const day = _date.getDate()
  const month = _date.getMonth() + 1
  const year = _date.getFullYear()
  return `${day.toString().length === 1 ? `0${day}` : `${day}`}.${month}.${year}`
}
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
      <Column header="Paid">
        <template #body="data">
          <div v-if="data.data.depth" class="pi pi-money-bill text-green-400" />
          <div v-else class="pi pi-money-bill text-gray-400" />
        </template>
      </Column>
      <Column header="Date" field="date">
        <template #body="data">
          {{ dateGetter(data.data.date) }}
        </template>
      </Column>
      <Column class="w-10rem" header="Amount">
        <template #body="data">
          <div class="flex gap-2 w-full justify-content-between">
            <div v-if="data.data.liability" class="text-green-400 pi pi-arrow-up" />
            <div v-else class="pi pi-arrow-down text-red-400" />
            <label> {{ `${data.data.amount} ${userStore.selectedUser?.finance.currency.symbol ?? userStore.selectedUser?.finance.currency.code}` }} </label>
          </div>
        </template>
      </Column>
      <Column header="Account Name">
        <template #body="data">
          <div class="flex flex-column">
            <label> {{ data.data.name }} </label>
            <label class="text-sm text-gray-400"> {{ `iban: ${data.data.iban}` }} </label>
          </div>
        </template>
      </Column>
      <Column header="Description" field="description" />
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
      <Column header="Paid">
        <template #body="data">
          <div v-if="data.data.depth" class="pi pi-money-bill text-green-400" />
          <div v-else class="pi pi-money-bill text-gray-400" />
        </template>
      </Column>
      <Column header="Date" field="date">
        <template #body="data">
          {{ dateGetter(data.data.date) }}
        </template>
      </Column>
      <Column class="w-10rem" header="Amount">
        <template #body="data">
          <div class="flex gap-2 w-full justify-content-between">
            <div v-if="data.data.liability" class="text-green-400 pi pi-arrow-up" />
            <div v-else class="pi pi-arrow-down text-red-400" />
            <label> {{ `${data.data.amount} ${userStore.selectedUser?.finance.currency.symbol ?? userStore.selectedUser?.finance.currency.code}` }} </label>
          </div>
        </template>
      </Column>
      <Column header="Account Name">
        <template #body="data">
          <div class="flex flex-column">
            <label> {{ data.data.name }} </label>
            <label class="text-sm text-gray-400"> {{ `iban: ${data.data.iban}` }} </label>
          </div>
        </template>
      </Column>
      <Column header="Description" field="description" />
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
