<template lang="pug">
.view-upgrades
  h2 Upgrades
  .upgrades
    upgrade(
      v-for="(definition, id) in upgrades"
      :name="definition.name"
      :description="definition.description"
      :cost="definition.baseCost.amount"
      :id="id"
      @buy="$emit('buy', id)"
    )
  button.navigate.anthill(@click="$emit('navigate', 'anthill')") Return to Anthill
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Upgrade } from "@/components/Upgrades"
import { upgrades } from "@/game/upgrades"

export default defineComponent({
  components: {
    Upgrade,
  },
  setup: () => ({ upgrades }),
})
</script>

<style lang="sass">
.view-upgrades
  background-color: #4f240c
  color: white
  transform: translateY(100vh)
  padding: 5rem 2rem 2rem
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column

  .upgrades
    margin-top: 2rem
    width: fit-content

    .upgrade:not(:last-child)
      margin-bottom: 1rem

  .navigate
    position: absolute

    &.anthill
      top: 1rem
      right: 1rem
</style>
