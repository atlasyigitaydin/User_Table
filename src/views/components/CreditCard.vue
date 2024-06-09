<script setup lang="ts">
import Chip from '../../assets/image/chip.png'
import Bg0 from '../../assets/image/card_bg0.jpg'
import Bg1 from '../../assets/image/card_bg1.jpg'
import Bg2 from '../../assets/image/card_bg2.jpg'
import Bg3 from '../../assets/image/card_bg3.jpg'
import AmericaExpress from '../../assets/image/american_express.png'
import Diners from '../../assets/image/diners.png'
import Jcb from '../../assets/image/jcb.png'
import Maestro from '../../assets/image/maestro.png'
import MasterCard from '../../assets/image/mastercard.png'
import Visa from '../../assets/image/visa.png'
import Discover from '../../assets/image/discover.png'
import type { User } from '~/core/types'

const props = defineProps<{
  card: User['creditCard']
}>()

const currentBg = computed(() => {
  switch (props.card.img) {
    case 0:
      return Bg0
    case 1:
      return Bg1
    case 2:
      return Bg2
    case 3:
      return Bg3
  }
})

const currentIssuer = computed(() => {
  switch (props.card.issuer) {
    case 'american_express':
      return AmericaExpress
    case 'diners_club':
      return Diners
    case 'jcb':
      return Jcb
    case 'maestro':
      return Maestro
    case 'mastercard':
      return MasterCard
    case 'visa':
      return Visa
    case 'discover':
      return Discover
  }
})
</script>

<template>
  <div
    style="height: 350px; width: 620px;"
    :class="`bg-gray-900 relative border-round-xl ${currentBg === Bg1 || currentBg === Bg2 || currentBg === Bg3 ? 'text-gray-900' : ''}`"
  >
    <img class="shadow-8 border-round-xl absolute left-0 top-0 z-4 m-3" width="500" height="250" :src="currentBg">
    <div style="width: 500px; height: 250px;" class="flex flex-column justify-content-around absolute m-3 z-5">
      <div class="flex justify-content-between mx-4">
        <Image width="60" height="49" class="" :src="Chip" />
        <div class="overflow-hidden h-5rem w-5rem">
          <Image :src="currentIssuer" width="100%" />
        </div>
      </div>
      <div class="w-full text-3xl flex justify-content-center font-semibold">
        {{ props.card.no.split('-').join(' ') }}
      </div>
      <div class="flex w-full justify-content-around">
        <div>
          {{ props.card.name }}
        </div>
        <div>
          {{ props.card.date }}
        </div>
      </div>
    </div>
    <img class="shadow-8 border-round-xl absolute right-0 bottom-0 m-3 opacity-40" width="500" height="250" :src="currentBg">
    <div style="width: 70px; height: 90px" class="flex text-2xl absolute opacity-40 bottom-0 right-0 m-3 z-5">
      {{ props.card.cvv }}
    </div>
  </div>
</template>

<style scoped>
</style>
