<template lang="pug">
currency-overlay
.world(:style="{ '--offset-x': viewOffset.x, '--offset-y': viewOffset.y }")
  anthill(@buy="buyGenerator" @navigate="ui.view = $event")
  upgrades(@buy="buyUpgrade" @navigate="ui.view = $event")
  prestige(@navigate="ui.view = $event")
</template>

<script lang="ts">
import { reactive, defineComponent, provide, unref, computed } from "vue"

import { PROVIDE_KEY } from "@/constants"
import * as views from "@/views"
import { useGame } from "@/game"
import { GeneratorNames, generators } from "@/game/generators"
import { Upgrades, upgrades } from "@/game/upgrades"

export default defineComponent({
  components: views,
  setup() {
    const ui = reactive({
      view: "anthill",
    })

    const game = useGame()

    provide(PROVIDE_KEY, game)

    function buyGenerator(generator: GeneratorNames) {
      const price = unref(game.prices.generators[generator].amount)
      const { currency } = generators[generator].baseCost

      if (game.state.currencies[currency] < price) {
        return
      }

      game.state.currencies[currency] -= price
      game.state.generators[generator].bought++
    }

    function buyUpgrade(upgrade: Upgrades) {
      const { currency, amount } = upgrades[upgrade].baseCost
      const price = unref(amount)

      if (game.state.currencies[currency] < price) {
        return
      }

      game.state.currencies[currency] -= price
      game.state.upgrades[upgrade] = true
    }

    const viewOffset = computed(
      () =>
        ((
          {
            anthill: { x: 0, y: 0 },
            upgrades: { x: 0, y: -1 },
            prestige: { x: 0, y: 1 },
          } as Record<string, Record<string, number>>
        )[ui.view])
    )

    return {
      buyGenerator,
      buyUpgrade,
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
    width: 100%
    height: 100%
    position: absolute
    box-sizing: border-box
    top: 0
    left: 0

button
  cursor: pointer

  &[disabled]
    cursor: not-allowed
</style>
