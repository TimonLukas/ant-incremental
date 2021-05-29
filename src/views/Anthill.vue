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
  anthill
  button.navigate.upgrades(@click="$emit('navigate', 'upgrades')") Go to upgrades
  button.navigate.prestige(@click="$emit('navigate', 'prestige')") Go to prestige
  buy-multiplier-selector(v-model="state.selectedBuyMultipliers.anthill")
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { BuyMultiplierSelector } from "@/components"
import { Anthill, Generator } from "@/components/Anthill"
import { generators } from "@/game/generators"
import { useProvidedGame } from "@/lib"

export default defineComponent({
  components: {
    Anthill,
    BuyMultiplierSelector,
    Generator,
  },
  emits: ["buy", "navigate"],
  setup() {
    const { state, multiplierPrices, bonuses } = useProvidedGame()

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

  .anthill
    position: absolute
    bottom: 15%
    right: 0
    transform: translateX(50%)
    z-index: 2
    height: 70vh

  .generators
    position: relative
    z-index: 10
    font-size: 1.5rem
    margin-bottom: 9%
    margin-right: 25vw

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
</style>
