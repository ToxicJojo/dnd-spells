<template lang="pug">
  .home
    SpellSearch
</template>

<script lang="ts">
import Vue from 'vue'
import SpellSearch from '@/components/SpellSearch.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    SpellSearch,
  },
})
</script>

<style lang="scss" scoped>

.home {
  @include flex-col;
  width: 100%;
  max-width: 800px;
  flex-grow: 1;
}

</style>
