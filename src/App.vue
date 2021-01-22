<template lang="pug">
  .app
    .app__content
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
  height: 100vh;
}

.app__content {
  @include flex-col;
  align-items: center;
  flex-grow: 1;

  width: 100%;
  padding: 32px 32px 0 32px;

  background: linear-gradient($color-background-gradient-start, $color-background-gradient-end);
  overflow: auto;
}

</style>
