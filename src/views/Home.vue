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
