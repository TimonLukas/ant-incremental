<template lang="pug">
.generator
  .name {{ name }} (x{{ format(bonus) }}):
  .amount {{ format(amount.bought) }} [+ {{ format(amount.generated) }}]
  button.buy(@click="$emit('buy')") Cost: {{ format(cost) }}
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { format } from "@/lib"

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
  setup: () => ({ format }),
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
