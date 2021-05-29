<template lang="pug">
.anthill
  img(src="@/assets/anthill.png" @load="$emit('load')")
</template>

<style lang="sass">
.anthill
  img
    height: 100%
</style>
