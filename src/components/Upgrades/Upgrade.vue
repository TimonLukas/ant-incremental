<template lang="pug">
.upgrade
  .name {{ name }}
  .description {{ description }}
  button.buy(@click="$emit('buy')" :class="buttonState" :disabled="buttonState === 'unavailable'") Cost: {{ format(cost) }}
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { format, useProvidedGame } from "@/lib"
import { Upgrades, upgrades } from "@/game/upgrades"

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  emits: ["buy"],
  setup(props) {
    const { state } = useProvidedGame()

    const buttonState = computed(() => {
      const upgrade = upgrades[props.id as unknown as Upgrades]

      if (state.upgrades[props.id as unknown as Upgrades]) {
        return "bought"
      }

      if (
        state.currencies[upgrade.baseCost.currency] > upgrade.baseCost.amount
      ) {
        return "available"
      }

      return "unavailable"
    })

    return { format, state, buttonState }
  },
})
</script>

<style lang="sass">
.upgrade
  display: grid
  grid-template-columns: 1fr 0fr
  grid-template-rows: 1fr 1fr
  gap: 0 10rem
  grid-template-areas: "name buy" "description buy"

  .name
    grid-area: name
    font-weight: bolder
    font-size: 1.15rem
    padding-bottom: .5rem

  .description
    grid-area: description

  .buy
    grid-area: buy
    width: 10rem

    background: transparent
    border: 3px solid black
    color: white

    &.bought
      border-color: white
      cursor: initial

    &.available
      border-color: green

    &.unavailable
      border-color: darkred
</style>
