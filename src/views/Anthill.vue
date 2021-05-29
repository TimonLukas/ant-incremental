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
  anthill(ref="anthill" @load="emitAnthillWidth")
  ants(:ants-per-second="antsPerSecond")
  button.navigate.upgrades(@click="$emit('navigate', 'upgrades')") Go to upgrades
  button.navigate.prestige(@click="$emit('navigate', 'prestige')") Go to prestige
  buy-multiplier-selector(v-model="state.selectedBuyMultipliers.anthill")
</template>

<script lang="ts">
import {
  ComponentPublicInstance,
  computed,
  defineComponent,
  ref,
  unref,
} from "vue"

import { BuyMultiplierSelector } from "@/components"
import { Anthill, Generator, Ants } from "@/components/Anthill"
import { generators } from "@/game/generators"
import { Currency } from "@/game/currency"
import { useProvidedGame } from "@/lib"
import { useEventListener } from "@vueuse/core"

export default defineComponent({
  components: {
    Anthill,
    BuyMultiplierSelector,
    Generator,
    Ants,
  },
  emits: ["buy", "navigate", "anthill-width"],
  setup(props, { emit }) {
    const { state, multiplierPrices, bonuses, totalProductions } =
      useProvidedGame()
    const anthill = ref<ComponentPublicInstance<typeof Anthill>>()

    const antsPerSecond = computed(
      () =>
        Math.log(unref(totalProductions.currencies[Currency.CRUMBS]) + 1) /
        Math.log(1e5)
    )

    function emitAnthillWidth() {
      emit("anthill-width", anthill.value?.$el.clientWidth || 1)
    }

    useEventListener("resize", emitAnthillWidth)

    return {
      state,
      multiplierPrices,
      bonuses,
      generators,
      totalProductions,
      Currency,
      antsPerSecond,
      anthill,
      emitAnthillWidth,
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
    bottom: 9vh
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
