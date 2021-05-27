<template lang="pug">
.view-upgrades
  h3 work in progress
  button.navigate.anthill(@click="$emit('navigate', 'anthill')") Return to Anthill
</template>

<style lang="sass">
.view-upgrades
  background-color: #4f240c
  color: white
  transform: translateY(100vh)

  .navigate
    position: absolute

    &.anthill
      top: 1rem
      right: 1rem
</style>
