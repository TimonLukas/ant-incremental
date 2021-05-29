<template lang="pug">
.view-upgrades(:style="{ '--scale': scale }")
  h2 Upgrades
  .upgrades
    upgrade(
      v-for="(definition, id) in upgrades"
      :name="definition.name"
      :description="definition.description"
      :cost="definition.baseCost.amount"
      :id="id"
      @buy="$emit('buy', id)"
    )
  button.navigate.anthill(@click="$emit('navigate', 'anthill')") Return to Anthill
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Upgrade } from "@/components/Upgrades"
import { upgrades } from "@/game/upgrades"

export default defineComponent({
  props: {
    scale: {
      type: Number,
      default: 1,
    },
  },
  components: {
    Upgrade,
  },
  setup: () => ({ upgrades }),
})
</script>

<style lang="sass">
.view-upgrades
  color: white
  transform: translateX(50%) scale(calc(1 / var(--scale))) translateY(-50%)
  transform-origin: bottom
  padding: 20rem 2rem 2rem
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  z-index: 15
  transition: opacity .5s
  opacity: 0

  &.active
    opacity: 1

  .upgrades
    margin-top: 2rem
    width: fit-content
    max-width: 65vh

    .upgrade:not(:last-child)
      margin-bottom: 1rem

  .navigate
    position: absolute

    &.anthill
      bottom: 0
      left: 50%
      transform: translateX(-50%)
</style>
