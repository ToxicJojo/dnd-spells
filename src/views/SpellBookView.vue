<template lang='pug'>
  .spell-book-view
    ul
      li(v-for='spell in spells') {{ spell.name }}
</template>

<script lang='ts'>
import { SpellBook, SpellCollection } from '@/types'
import Vue from 'vue'

export default Vue.extend({
  name: 'SpellBookView',
  computed: {
    spells (): SpellCollection {
      return this.$store.state.spellBook
    },
  },
})
</script>

<style lang='scss' scoped>

.spell-book-view {
  @include flex-col;
}

</style>
