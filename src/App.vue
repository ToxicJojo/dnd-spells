<template lang="pug">
  .app
    .app__content
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

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

.app__content {
  padding: 32px;
}

</style>
