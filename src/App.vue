<template lang="pug">
currency-overlay
.world(:style="[worldTransform, dayNightCycle.cssVars]")
  anthill(@buy="buyGenerator" @navigate="ui.view = $event" @anthill-width="anthillWidth = $event")
  upgrades(@buy="buyUpgrade" @navigate="ui.view = $event" :class="{ active: ui.view === 'upgrades' }" :scale="upgradesScale")
  prestige(@navigate="ui.view = $event")
  .background
    .dirt
    .grass
    .sky
      .celestial-bodies
        img.sun(src="@/assets/sun.png")
        img.moon(src="@/assets/moon.png")
</template>

<script lang="ts">
import { reactive, defineComponent, provide, unref, computed, ref } from "vue"
import * as TWEEN from "@tweenjs/tween.js"

import { PROVIDE_KEY } from "@/constants"
import * as views from "@/views"
import { useGame } from "@/game"
import { GeneratorNames } from "@/game/generators"
import { Upgrades, upgrades } from "@/game/upgrades"
import { useDayNightCycle } from "@/visuals"

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

    const anthillWidth = ref(1)
    const upgradesScale = computed(() => window.innerWidth / anthillWidth.value)

    const transforms = computed(() => ({
      upgrades: `transform: scale(${
        Math.round(upgradesScale.value * 100) / 100
      }) translateY(9vh) translateX(-50%)`,
      prestige: "transform: translateY(100vh)",
    }))

    const worldTransform = computed(() =>
      Object.keys(transforms.value).includes(ui.view)
        ? transforms.value[ui.view as keyof typeof transforms.value]
        : null
    )

    const dayNightCycle = useDayNightCycle()

    return {
      buyGenerator,
      buyUpgrade,
      ui,
      worldTransform,
      anthillWidth,
      upgradesScale,
      dayNightCycle,
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
  transform-origin: bottom

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
      height: 8%
      bottom: 0
      z-index: 1

    .grass
      background-color: #1b9415
      height: 10%
      bottom: 8%
      z-index: 2

    .sky
      background: linear-gradient(to bottom, var(--day-night-cycle-gradient-color-1) 0%, var(--day-night-cycle-gradient-color-2) 50%, var(--day-night-cycle-gradient-color-3) 100%)
      height: 100%
      display: flex
      align-items: center
      justify-content: center
      --day-progress: 0deg

      .celestial-bodies
        position: relative
        transform: scaleX(calc(1 / 3)) translateY(50vh) rotate(calc(360deg * var(--day-night-cycle-progress-raw)))
        transition: transform linear 1s

        .sun
          position: absolute
          bottom: 0
          left: 0
          transform: translate(-50%, -80vh)

        .moon
          position: absolute
          top: 0
          left: 0
          transform: translate(-50%, 80vh)

button
  cursor: pointer

  &[disabled]
    cursor: not-allowed
</style>
