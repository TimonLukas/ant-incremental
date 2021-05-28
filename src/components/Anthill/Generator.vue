<template lang="pug">
.generator
  .name {{ name }}
  .amount {{ format(amount.bought) }} [+ {{ format(amount.generated) }}]
  .multiplier x{{ format(bonus) }}
  button.buy(@click="$emit('buy')" :class="buttonState") Cost: {{ format(cost) }}
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { format, useProvidedGame } from "@/lib"
import { upgrades } from "@/game/upgrades"
import { Currency } from "@/game/currency"

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Object,
      required: true,
    },
    bonus: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  emits: ["buy"],
  setup(props) {
    const { state } = useProvidedGame()

    const buttonState = computed(() => {
      if (state.currencies[Currency.CRUMBS] > props.cost) {
        return "available"
      }

      return "unavailable"
    })

    return { format, buttonState }
  },
})
</script>

<style lang="sass">
.generator
  display: grid
  grid-template-columns: 1fr 1fr 0fr
  grid-template-rows: 1fr 1fr
  gap: 0 5rem
  grid-template-areas: "name multiplier buy" "description multiplier buy"
  color: white

  .name
    grid-area: name
    font-weight: bolder
    margin-right: .5rem

  .description
    grid-area: description

  .multiplier
    grid-area: multiplier
    display: flex
    align-items: center

  .buy
    grid-area: buy
    width: 10rem

    background: transparent
    border: 3px solid black
    color: white

    &.available
      border-color: green

    &.unavailable
      border-color: darkred
</style>
