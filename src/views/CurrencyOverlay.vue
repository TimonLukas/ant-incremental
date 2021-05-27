<template lang="pug">
.overlay-currencies
  currency(name="Crumbs" :amount="currencies.crumbs.amount")
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Currency } from "@/components/CurrencyOverlay"

export default defineComponent({
  components: {
    Currency,
  },
  props: {
    currencies: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="sass">
.overlay-currencies
  position: absolute
  top: 0
  left: 0
  z-index: 10000
  margin: 1rem
  pointer-events: none

  font-size: 1.5rem
</style>
