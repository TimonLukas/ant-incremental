<template lang="pug">
.currency
  .name {{ name }}:
  .amount {{ format(amount) }}
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
      type: Number,
      required: true,
    },
  },
  setup: () => ({ format }),
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
