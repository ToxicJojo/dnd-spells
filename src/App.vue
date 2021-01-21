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
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
}

.app__content {
  @include flex-col;
  align-items: center;
  width: 100%;
  padding: 32px 32px 0 32px;
  background: linear-gradient($color-background-gradient-start, $color-background-gradient-end);
  flex-grow: 1;
  overflow: auto;
}

</style>
