<template lang="pug">
.view-anthill
  .generators
    generator(name="Worker Ant" :amount="state.generators.worker.amount" :cost="prices.generators.worker.value" @buy="$emit('buy', 'worker')")
    generator(name="Breeder Ant" :amount="state.generators.breeder.amount" :cost="prices.generators.breeder.value" @buy="$emit('buy', 'breeder')")
    generator(name="Mother Ant" :amount="state.generators.mother.amount" :cost="prices.generators.mother.value" @buy="$emit('buy', 'mother')")
    generator(name="Queen Ant" :amount="state.generators.queen.amount" :cost="prices.generators.queen.value" @buy="$emit('buy', 'queen')")
    generator(name="Demi-God Ant" :amount="state.generators.demiGod.amount" :cost="prices.generators.demiGod.value" @buy="$emit('buy', 'demiGod')")
  .background
    .dirt
    .grass
    .sky
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Generator } from "@/components/Anthill"
import { Generators } from "@/game/game-state"

export default defineComponent({
  components: {
    Generator,
  },
  emits: ["buy"],
  props: {
    state: {
      type: Object,
      required: true,
    },
    prices: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="sass">
.view-anthill
  position: relative
  display: flex
  align-items: center
  justify-content: center

  .generators
    position: relative
    z-index: 1
    font-size: 2rem

    .generator
      margin-bottom: .5rem

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
