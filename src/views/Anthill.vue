<template lang="pug">
.view-anthill
  .generators
    generator(
      v-for="(generator, name) in generators"
      :name="generator.name"
      :amount="state.generators[name]"
      :bonus="bonuses.generators[name].value"
      :cost="prices.generators[name].amount.value"
      @buy="$emit('buy', name)"
    )
  button.navigate.upgrades(@click="$emit('navigate', 'upgrades')") Go to upgrades
  button.navigate.prestige(@click="$emit('navigate', 'prestige')") Go to prestige
  .background
    .dirt
    .grass
    .sky
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Generator } from "@/components/Anthill"
import { generators } from "@/game/generators"
import { useProvidedGame } from "@/lib"

export default defineComponent({
  components: {
    Generator,
  },
  emits: ["buy", "navigate"],
  setup() {
    const { state, prices, bonuses } = useProvidedGame()

    return { state, prices, bonuses, generators }
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

  .generators
    position: relative
    z-index: 1
    font-size: 2rem

    .generator
      margin-bottom: .5rem

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
      height: 5%
      bottom: 7.5%
      z-index: 2

    .sky
      background: linear-gradient(to top, #5eb6e6 0%, #1581bd 100%)
      height: 100%
</style>
