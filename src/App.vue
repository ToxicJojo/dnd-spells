<template lang="pug">
  .app
    .app__content
      router-view
    NavigationBar
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

export default Vue.extend({
  name: 'App',
  mounted () {
    this.$store.dispatch('loadSpells')
  },
  components: {
    NavigationBar,
  },
})
</script>

<style lang="scss">
@import '@/scss/style.scss';

.app {
  @include flex-col;
  min-height: 100vh;
}

.app__content {
  padding: 32px;
  background: linear-gradient($color-background-gradient-start, $color-background-gradient-end);
  flex-grow: 1;
}

</style>
