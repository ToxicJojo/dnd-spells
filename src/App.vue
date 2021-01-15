<template lang="pug">
  .app
    router-view
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  mounted () {
    this.$store.dispatch('loadSpells')
  },
})
</script>

<style lang="scss">

</style>
