<template lang="pug">
.overlay-currencies
  currency(name="Crumbs" :amount="state.currencies[GameCurrency.CRUMBS]" :per-second="totalProductions.currencies[GameCurrency.CRUMBS].value")
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Currency as GameCurrency } from "@/game/currency"
import { Currency } from "@/components/CurrencyOverlay"
import { useProvidedGame } from "@/lib"

export default defineComponent({
  components: {
    Currency,
  },
  setup() {
    const { state, totalProductions } = useProvidedGame()

    return {
      GameCurrency,
      state,
      totalProductions,
    }
  },
})
</script>

<style lang="sass">
.overlay-currencies
  position: absolute
  top: 0
  left: 1rem
  z-index: 10000
  margin: 1rem
  pointer-events: none
  font-size: 1.5rem
  color: white
</style>
