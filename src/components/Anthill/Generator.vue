<template lang="pug">
.generator
  .name {{ name }}:
  .amount {{ amount.bought.toFixed(0) }} [+ {{ amount.generated.toFixed(0) }}]
  button.buy(@click="$emit('buy')") Cost: {{ cost.toFixed(0) }}
</template>

<script lang="ts">
import { defineComponent } from "vue"

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
    cost: {
      type: Number,
      required: true,
    },
  },
  emits: ["buy"],
})
</script>

<style lang="sass">
.generator
  display: flex
  flex-direction: row

  .name
    font-weight: bolder
    margin-right: .5rem

  .buy
    background: none
    border: 3px solid yellow
    margin-left: 2rem
    cursor: pointer
</style>
