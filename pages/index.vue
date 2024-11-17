<script setup lang="ts">
definePageMeta({
  name: 'home',
})
const router = useRouter()
const firebase = useFirebaseStore()
onMounted(async () => {
  await firebase.fetchCount()
})

const fastCreateDisplay = ref<'lg' | 'md' | 'sm'>('lg')
const fastCreateUrl = ref<string>('https://puanla.co')
const createAndDownload = ref<boolean>(false)

const screenshotStore = useScreenShotStore()

async function fast(url: string | undefined) {
  if (url) {
    screenshotStore.url = removeHttps(url)
    screenshotStore.width = fastCreateDisplay.value === 'lg' ? 1920 : fastCreateDisplay.value === 'md' ? 1024 : 375
    router.push({ name: 'screenshot' })
    await screenshotStore.fetchSs()
    if (createAndDownload.value) {
      screenshotStore.download()
    }
  }
}
</script>

<template>
  <NuxtLayout name="default">
    <div class="overflow-x-hidden overflow-y-auto w-full h-full z-20 flex justify-start lg:pt-24 pt-6 lg:p-8 p-4 flex-col gap-6 lg:text-gray-950 text-white lg:bg-transparent bg-gray-950/75">
      <div class="flex items-center gap-4">
        <Icon class="lg:text-7xl text-5xl" name="material-symbols-light:control-camera-rounded" />
        <div class="lg:text-5xl text-2xl text-balance tracking-tight">
          Web Screen Shot
        </div>
      </div>
      <div class="lg:text-2xl">
        <p> Kolayca Web Sitenizden || Başka Bir Siteden <label class=""> Ekran Görüntüsü Alın</label> ! </p>
      </div>

      <div class="flex flex-col text-xl gap-2 font-light">
        <label class="border-l pl-2 lg:border-gray-900 "> Tam sayfa veya görünür alan seçenekleriyle özelleştirin. </label>
        <label class="border-l pl-2 lg:border-gray-900 "> Yüksek çözünürlüklü ekran görüntüleri elde edin. </label>
        <label class="border-l pl-2 lg:border-gray-900 "> Hızlı sonuçlar alın. </label>
      </div>

      <!-- <div class="text-lg">
        <label class="text-xl"> {{ firebase.count }} </label>
        <label> Adet Ekran Görüntüsü Alındı </label>
      </div> -->
      <div class="flex items-end text-xl mt-6 gap-2 font-light">
        <button class="text-gray-950 lg:text-white lg:w-auto w-full bg-white lg:bg-gray-950 py-2 px-3 rounded flex justify-center lg:justify-start items-center gap-2" @click="router.push({ name: 'screenshot' })">
          Başlayın
          <Icon name="material-symbols-light:arrow-forward-ios-rounded" />
        </button>
      </div>

      <div class="flex flex-col lg:bg-white lg:p-4 rounded mt-20 pl-2 gap-1 lg:w-[400px]">
        <label class="text-xl"> Hızlı Başla </label>
        <div class="flex w-full gap-2">
          <button :class="`${fastCreateDisplay === 'lg' ? 'bg-gray-950 text-white' : 'bg-white text-gray-950'} w-full py-1 border-gray-950 rounded flex items-center justify-center`" @click="fastCreateDisplay = 'lg'">
            <Icon class="text-3xl" name="material-symbols-light:desktop-windows-outline-rounded" />
          </button>
          <button :class="`${fastCreateDisplay === 'md' ? 'bg-gray-950 text-white' : 'bg-white text-gray-950'} w-full py-1 border-gray-950 rounded flex items-center justify-center`" @click="fastCreateDisplay = 'md'">
            <Icon class="text-3xl" name="material-symbols-light:tablet-outline" />
          </button>
          <button :class="`${fastCreateDisplay === 'sm' ? 'bg-gray-950 text-white' : 'bg-white text-gray-950'} w-full py-1 border-gray-950 rounded flex items-center justify-center`" @click="fastCreateDisplay = 'sm'">
            <Icon class="text-2xl" name="mynaui:mobile" />
          </button>
        </div>
        <input
          v-model="fastCreateUrl"
          placeholder="Hızlı başlamak için linki yapıştır"
          class="border border-gray-950 text-gray-950 bg-white rounded px-3 py-2"
          @focus="(event: any) => {
            event.target.select()
          }"
        >
        <button
          class="switch border-gray-950 rounded flex items-center gap-2 py-2"
          @click="createAndDownload = !createAndDownload"
        >
          <div :class="`${createAndDownload ? 'bg-green-400' : ''} border lg:border-gray-950 border-white rounded h-4 w-4`" />
          <p> {{ "Yüklenmenin ardından indir" }} </p>
        </button>
        <button
          :class="`text-white rounded text-lg py-1
          ${isValidUrl(fastCreateUrl) ? 'bg-green-400' : 'bg-gray-950 cursor-auto opacity-70'}`"
          @click="() => {
            if (isValidUrl(fastCreateUrl))
              fast(fastCreateUrl)
          }"
        >
          {{ createAndDownload ? 'Görüntüle ve İndir' : 'Görüntüle' }}
        </button>
      </div>
    </div>

    <HomeBg />
  </NuxtLayout>
</template>
