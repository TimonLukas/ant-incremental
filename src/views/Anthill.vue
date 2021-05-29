<template lang="pug">
.view-anthill
  .generators
    generator(
      v-for="(generator, name) in generators"
      :name="generator.name"
      :amount="state.generators[name]"
      :bonus="bonuses.generators[name].value"
      :cost="multiplierPrices.generators[name].amount.value"
      :generator-name="name"
      :multiplier="state.selectedBuyMultipliers.anthill"
      @buy="$emit('buy', name)"
    )
  button.navigate.upgrades(@click="$emit('navigate', 'upgrades')") Go to upgrades
  button.navigate.prestige(@click="$emit('navigate', 'prestige')") Go to prestige
  buy-multiplier-selector(v-model="state.selectedBuyMultipliers.anthill")
  .background
    .dirt
    .grass
    .sky
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue"

import { BuyMultiplierSelector } from "@/components"
import { Generator } from "@/components/Anthill"
import { generators } from "@/game/generators"
import { useProvidedGame } from "@/lib"

export default defineComponent({
  components: {
    BuyMultiplierSelector,
    Generator,
  },
  emits: ["buy", "navigate"],
  setup() {
    const { state, multiplierPrices, bonuses } = useProvidedGame()

    watchEffect(() => console.log(JSON.parse(JSON.stringify(multiplierPrices))))

    return { state, multiplierPrices, bonuses, generators }
  },
})
</script>

<style lang="sass">
.view-anthill
  position: absolute
  top: 0
  left: 0
  display: flex
  align-items: center
  justify-content: center

  .buy-multiplier-selector
    position: absolute
    bottom: 1rem
    left: 1rem
    z-index: 2

  .generators
    position: relative
    z-index: 1
    font-size: 1.5rem
    margin-bottom: 9%

    .generator
      margin-bottom: 2rem

  .navigate
    position: absolute
    z-index: 2

    &.upgrades
      bottom: 1rem
      right: 1rem

    &.prestige
      top: 1rem
      right: 1rem

  .background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

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
</style>
