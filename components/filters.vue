<script setup lang="ts">
const screenshotStore = useScreenShotStore()

const isDesktop = computed(() => screenshotStore.width === 1920)
const isTablet = computed(() => screenshotStore.width === 1024)
const isMobile = computed(() => screenshotStore.width === 375)
</script>

<template>
  <div class="lg:h-full lg:p-4 p-2 flex flex-col justify-between gap-8 lg:max-w-[400px] border rounded border-gray-950">
    <div
      :class="`flex flex-col gap-4 ${screenshotStore.screenshot ? 'hidden lg:flex' : 'flex'}`"
    >
      <div class="w-full">
        <div> {{ "Link" }} </div>
        <input
          v-model="screenshotStore.url"
          placeholder="https://example.com"
          class="border w-full border-gray-950 rounded px-3 py-2"
          @focus="(event: any) => {
            event.target.select()
          }"
        >
      </div>
      <div class="flex flex-col ">
        <div> {{ "Ölçek" }} </div>
        <div class="flex w-full gap-2">
          <button
            :class="`${isDesktop ? 'bg-gray-950 text-white' : ''} w-full py-1 border border-gray-950 rounded flex items-center justify-center`"
            @click="screenshotStore.width = 1920"
          >
            <Icon class="text-3xl" name="material-symbols-light:desktop-windows-outline-rounded" />
          </button>
          <button
            :class="`${isTablet ? 'bg-gray-950 text-white' : ''} w-full py-1 border border-gray-950 rounded flex items-center justify-center`"
            @click="screenshotStore.width = 1024"
          >
            <Icon class="text-3xl" name="material-symbols-light:tablet-outline" />
          </button>
          <button
            :class="`${isMobile ? 'bg-gray-950 text-white' : ''} w-full py-1 border border-gray-950 rounded flex items-center justify-center`"
            @click="screenshotStore.width = 375"
          >
            <Icon class="text-2xl" name="mynaui:mobile" />
          </button>
        </div>
        <div class="flex w-full mt-2">
          <div class="border-l w-3/12 flex items-center px-3 justify-center lg:text-lg border-gray-950 border-y rounded-l">
            width
          </div>
          <input
            v-model="screenshotStore.width"
            class="border border-gray-950 lg:px-3 py-2 text-center w-full"
            type="number"
          >
          <div class="border-r w-3/12 flex items-center px-3 justify-center lg:text-lg border-gray-950 border-y rounded-r">
            px
          </div>
        </div>
      </div>
    </div>
    <div class="flex lg:flex-col flex-col gap-4">
      <button
        v-if="screenshotStore.screenshot"
        :class="`lg:w-[300px] bg-white border-gray-950 border text-gray-950 flex gap-2 items-center justify-center rounded text-lg py-1
          ${screenshotStore.screenshot ? 'flex lg:hidden' : 'cursor-auto opacity-70'}`"
        @click="() => {
          screenshotStore.screenshot = undefined
        }"
      >
        {{ "Yeni Site" }}
        <Icon class="text-3xl" name="material-symbols-light:edit" />
      </button>

      <button
        v-if="screenshotStore.screenshot"
        :class="`lg:w-[300px] bg-gray-950 text-white flex items-center justify-center rounded text-lg py-1
          ${screenshotStore.screenshot ? '' : 'cursor-auto opacity-70'}`"
        @click="() => {
          if (screenshotStore.screenshot)
            screenshotStore.download()
        }"
      >
        {{ "İndir" }}
        <Icon class="text-3xl" name="material-symbols-light:download" />
      </button>

      <button
        :class="`${screenshotStore.screenshot ? 'lg:flex hidden' : ''} bg-gray-950 text-white flex items-center justify-center rounded text-lg py-1
          ${screenshotStore.url ? '' : 'cursor-auto opacity-70'}`"
        @keyup.enter="screenshotStore.fetchSs()"
        @click="screenshotStore.fetchSs()"
      >
        {{ "Görüntüyü Yakala" }}
        <Icon class="text-3xl" name="material-symbols-light:control-camera-rounded" />
      </button>
    </div>
  </div>
</template>
