<template lang="pug">
.currency
  .name {{ name }}:
  .amount {{ amount.toFixed(0) }}
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
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="sass">
.currency
  display: flex
  flex-direction: row

  .name
    font-weight: bolder
    margin-right: .5rem
</style>
