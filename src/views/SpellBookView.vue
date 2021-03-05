<template lang='pug'>
  .spell-book-view
    ul
      li(v-for='spell in spells')
        SpellBookEntry(:spell='spell')
</template>

<script lang='ts'>
import Vue from 'vue'
import { SpellCollection } from '@/types'
import SpellBookEntry from '@/components/SpellBookEntry.vue'

export default Vue.extend({
  name: 'SpellBookView',
  computed: {
    spells (): SpellCollection {
      return this.$store.state.spellBook
    },
  },
  components: {
    SpellBookEntry,
  },
})
</script>

<style lang='scss' scoped>

.spell-book-view {
  @include flex-col;
  width: 100%;

  ul {
    @include flex-row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      @include flex-row;
      padding: 24px;
      flex-basis: 100%;
      @media (min-width: 800px) {
        flex-basis: 50%;
      }
    }
  }
}

</style>
