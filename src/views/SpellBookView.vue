<template lang='pug'>
  .spell-book-view
    ul
      li(v-for='spell in spells')
        SpellBookEntry(:spell='spell')
    .spell-book-view__empty-state(v-if='showEmptyState')
      p There are no spells in your spell book. Add some from the spell list.
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
    showEmptyState (): boolean {
      return Object.keys(this.spells).length === 0
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
  height: 100%;

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

.spell-book-view__empty-state {
  @include flex-row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  color: #eee;
  font-size: large;
  font-weight: bold;
  text-align: center;
  opacity: .7;
}

</style>
