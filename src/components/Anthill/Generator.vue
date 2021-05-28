<template lang="pug">
.generator
  img.icon(:src="`generators/${generatorName}.png`")
  .name {{ name }}
  .amount {{ format(amount.bought) }} [+ {{ format(amount.generated) }}]
  .multiplier x{{ format(bonus) }}
  button.buy(@click="$emit('buy')" :class="buttonState") Cost: {{ format(cost) }}
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { format, useProvidedGame } from "@/lib"
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
    generatorName: {
      type: String,
      required: true,
    },
  },
  emits: ["buy"],
  setup(props) {
    const { state } = useProvidedGame()

    const buttonState = computed(() => {
      if (state.currencies[Currency.CRUMBS] >= props.cost) {
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
  grid-template-columns: 0fr 1.5fr 1fr 0fr
  grid-template-rows: 1fr 1fr
  gap: 0 0
  grid-template-areas: "icon name multiplier buy" "icon description multiplier buy"
  color: white

  .icon
    grid-area: icon
    height: 4rem
    margin-right: 1rem

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
    padding-left: 1rem

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
