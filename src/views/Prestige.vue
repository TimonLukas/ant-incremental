<template lang="pug">
.view-prestige
  h3 work in progress
  button.navigate.anthill(@click="$emit('navigate', 'anthill')") Return to Anthill
</template>

<style lang="sass">
.view-prestige
  background-color: #1581bd
  color: white
  transform: translateY(-100vh)

  .navigate
    position: absolute

    &.anthill
      bottom: 1rem
      right: 1rem
</style>
