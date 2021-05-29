<template lang="pug">
currency-overlay
.world(:style="worldTransform")
  anthill(@buy="buyGenerator" @navigate="ui.view = $event")
  upgrades(@buy="buyUpgrade" @navigate="ui.view = $event" :class="{ active: ui.view === 'upgrades' }")
  prestige(@navigate="ui.view = $event")
  .background
    .dirt
    .grass
    .sky
</template>

<script lang="ts">
import {
  reactive,
  defineComponent,
  provide,
  unref,
  computed,
  watchEffect,
} from "vue"

import { PROVIDE_KEY } from "@/constants"
import * as views from "@/views"
import { useGame } from "@/game"
import { GeneratorNames } from "@/game/generators"
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
      const { amount, currency, buyAmount } =
        game.multiplierPrices.generators[generator]
      const price = unref(amount)

      if (game.state.currencies[currency] < price) {
        return
      }

      const amountToBuy = buyAmount.value

      game.state.currencies[currency] -= price
      game.state.generators[generator].bought = amountToBuy
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

    const transforms = {
      upgrades: "transform: scale(1.5) translateX(-50%)",
      prestige: "transform: translateY(100vh)",
    }
    const worldTransform = computed(() =>
      Object.keys(transforms).includes(ui.view)
        ? transforms[ui.view as keyof typeof transforms]
        : null
    )

    watchEffect(() => console.log(ui.view, worldTransform.value))

    return {
      buyGenerator,
      buyUpgrade,
      ui,
      worldTransform,
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

  > *
    width: 100%
    height: 100%
    position: absolute
    box-sizing: border-box
    top: 0
    left: 0

  .background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transform-origin: center
    transform: scaleX(3)

    > *
      position: absolute
      left: 0
      width: 100%

    .dirt
      background-color: #4f240c
      height: 10%
      bottom: 0
      z-index: 1

    .grass
      background-color: #1b9415
      height: 10%
      bottom: 8%
      z-index: 2

    .sky
      background: linear-gradient(to top, #5eb6e6 0%, #1581bd 100%)
      height: 100%

button
  cursor: pointer

  &[disabled]
    cursor: not-allowed
</style>
