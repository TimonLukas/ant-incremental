<template lang="pug">
.buy-multiplier-selector
  button(
    v-for="(value, label) in options"
    @click="selectedMultiplier = value"
    :class="{ active: selectedMultiplier === value }"
  ) {{ label }}
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useVModel } from "@vueuse/core"

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectedMultiplier = useVModel(props, "modelValue", emit)

    return {
      selectedMultiplier,
      options: {
        "1x": 1,
        "10x": 10,
        "25x": 25,
        "50x": 50,
        "100x": 100,
        Max: Infinity,
      },
    }
  },
})
</script>

<style lang="sass">
.buy-multiplier-selector
  button
    background: orange
    border: none
    padding: .9rem

    &:not(:last-child)
      margin-right: 1rem

    &.active
      padding: calc(.9rem - 3px)
      border: 3px solid white
      box-sizing: border-box
</style>
