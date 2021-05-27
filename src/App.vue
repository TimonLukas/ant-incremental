<template lang="pug">
.world(
  :style="{ '--render-width': `${TARGET_RENDER_WIDTH_IN_PX}px`, '--render-height': `${TARGET_RENDER_HEIGHT_IN_PX}px`, '--scale-factor': scaleFactor }"
  )
  currency-overlay(:currencies="game.currencies")
  anthill(:state="game" :prices="prices" @buy="buy")
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"
import { useEventListener } from "@vueuse/core"

import {
  TARGET_RENDER_WIDTH_IN_PX,
  TARGET_RENDER_HEIGHT_IN_PX,
} from "@/constants"
import { Anthill, CurrencyOverlay } from "@/views"
import { useGame } from "@/game"
import { usePrices } from "@/game/prices"
import { Generators } from "@/game/game-state"

export default defineComponent({
  components: {
    Anthill,
    CurrencyOverlay,
  },
  setup() {
    const scaleFactor = ref(1)
    const updateScaleFactor = () => {
      const { innerWidth, innerHeight } = window

      const widthFactor = innerWidth / TARGET_RENDER_WIDTH_IN_PX
      const heightFactor = innerHeight / TARGET_RENDER_HEIGHT_IN_PX

      scaleFactor.value = Math.min(widthFactor, heightFactor)
    }
    updateScaleFactor()
    useEventListener("resize", updateScaleFactor)

    const game = useGame()
    const prices = usePrices(game)

    function buy(generator: Generators) {
      const price = prices.generators[generator].value

      if (game.currencies.crumbs.amount < price) {
        return
      }

      game.currencies.crumbs.amount -= price
      game.generators[generator].amount++
    }

    return {
      scaleFactor,
      game,
      prices,
      buy,
      TARGET_RENDER_WIDTH_IN_PX,
      TARGET_RENDER_HEIGHT_IN_PX,
    }
  },
})
</script>

<style lang="sass">
body
  width: 100vw
  height: 100vh
  margin: 0
  overflow: hidden

#app
  width: 100%
  height: 100%
  font-family: sans-serif

.world
  width: var(--render-width)
  height: var(--render-height)
  transform-origin: top left
  transform: scale(var(--scale-factor))

  > *
    width: 100%
    height: 100%
</style>
