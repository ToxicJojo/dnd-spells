<template lang="pug">
  .app
    main.app__content
      router-view(v-if='!isLoading')
    NavigationBar
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

export default Vue.extend({
  name: 'App',
  data () {
    return {
      isLoading: true,
    }
  },
  async mounted () {
    await this.$store.dispatch('loadSpells')
    this.isLoading = false
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
  height: 100vh;
  background: linear-gradient($color-background-gradient-start, $color-background-gradient-end);
}

.app__content {
  @include flex-col;
  align-items: center;
  flex-grow: 1;

  position: relative;
  width: 100%;
  max-width: 1000px;
  padding: 24px 24px 0 24px;

  overflow: auto;
}

</style>
