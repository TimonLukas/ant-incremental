<template lang="pug">
.overlay-currencies
  currency(name="Crumbs" :amount="state.currencies[GameCurrency.CRUMBS]")
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"

import { Currency as GameCurrency } from "@/game/currency"
import { Currency } from "@/components/CurrencyOverlay"
import { PROVIDE_KEY } from "@/constants"
import { GameState } from "@/game/game-state"

export default defineComponent({
  components: {
    Currency,
  },
  setup() {
    const { state } = inject(PROVIDE_KEY) as { state: GameState }

    return {
      GameCurrency,
      state,
    }
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
