<template>
  <div class="top-0 left-0 w-screen h-screen fixed poppins">
    <AppHeader />
    <PageMain>
      <slot />
    </PageMain>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.poppins {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
