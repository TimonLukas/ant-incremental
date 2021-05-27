<template lang="pug">
.world(:style="{ '--offset-x': viewOffset.x, '--offset-y': viewOffset.y }")
  currency-overlay
  anthill(@buy="buy" @navigate="ui.view = $event")
  upgrades(@navigate="ui.view = $event")
</template>

<script lang="ts">
import { reactive, defineComponent, provide, unref, computed } from "vue"

import { PROVIDE_KEY } from "@/constants"
import { Anthill, CurrencyOverlay, Upgrades } from "@/views"
import { useGame } from "@/game"
import { GeneratorNames, generators } from "@/game/generators"

export default defineComponent({
  components: {
    Anthill,
    CurrencyOverlay,
    Upgrades,
  },
  setup() {
    const ui = reactive({
      view: "anthill",
    })

    const { state, prices } = useGame()

    provide(PROVIDE_KEY, { state, prices })

    function buy(generator: GeneratorNames) {
      const price = unref(prices.generators[generator].amount)
      const { currency } = generators[generator].baseCost

      if (state.currencies[currency] < price) {
        return
      }

      state.currencies[currency] -= price
      state.generators[generator].bought++
    }

    const viewOffset = computed(
      () =>
        ((
          {
            anthill: { x: 0, y: 0 },
            upgrades: { x: 0, y: -1 },
          } as any
        )[ui.view])
    )

    return {
      buy,
      ui,
      viewOffset,
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
  width: 100vw
  height: 100vh
  position: relative
  transition: transform .5s
  transform: translate(calc(var(--offset-x, 0) * 100vw), calc(var(--offset-y, 0) * 100vh))

  > *
    width: 100vw
    height: 100vh
    position: absolute
    top: 0
    left: 0
</style>
