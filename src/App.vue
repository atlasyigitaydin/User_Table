<script setup lang="ts">
import DynamicDialog from 'primevue/dynamicdialog'

useHead({
  title: 'Users Panel',
  htmlAttrs: { class: appMode.value },
  meta: [
    {
      name: 'description',
      content: 'template',
    },
    {
      name: 'app-mode',
      content: computed(() => appMode.value),
    },
  ],
  link: [
    {
    },
    ...themeLinks,
  ],
})
</script>

<template>
  <Toast />
  <ConfirmDialog />
  <DynamicDialog />
  <!-- <header>
    <TheHeader />
  </header>
  <routerSide>
    <RouterView />
  </routerSide> -->
  <!-- <footer>
    <TheFooter />
  </footer> -->
  <routerSide>
    <RouterView />
  </routerSide>
  <!-- <div class="h-full">
    <NavBar />
  </div> -->
</template>
