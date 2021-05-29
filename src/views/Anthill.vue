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
  ants(:ants-per-second="antsPerSecond")
  button.navigate.upgrades(@click="$emit('navigate', 'upgrades')") Go to upgrades
  button.navigate.prestige(@click="$emit('navigate', 'prestige')") Go to prestige
  buy-multiplier-selector(v-model="state.selectedBuyMultipliers.anthill")
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue"

import { BuyMultiplierSelector } from "@/components"
import { Anthill, Generator, Ants } from "@/components/Anthill"
import { generators } from "@/game/generators"
import { Currency } from "@/game/currency"
import { useProvidedGame } from "@/lib"

export default defineComponent({
  components: {
    Anthill,
    BuyMultiplierSelector,
    Generator,
    Ants,
  },
  emits: ["buy", "navigate"],
  setup() {
    const { state, multiplierPrices, bonuses, totalProductions } =
      useProvidedGame()

    const antsPerSecond = computed(
      () =>
        Math.log(unref(totalProductions.currencies[Currency.CRUMBS]) + 1) /
        Math.log(1e5)
    )

    return {
      state,
      multiplierPrices,
      bonuses,
      generators,
      totalProductions,
      Currency,
      antsPerSecond,
    }
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
    bottom: 8%
    right: 0
    transform: translateX(50%)
    z-index: 15
    height: 70vh

  .ants
    position: absolute
    bottom: 8%
    height: 10%
    width: 100%

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
