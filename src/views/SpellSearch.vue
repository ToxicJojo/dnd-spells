<template lang='pug'>
  .spell-search
    input.spell-search__input(type='text' v-model='searchInput' ref='searchInput' placeholder='Search a spell')
    ul.spell-search__results
      li(v-for='spell in searchResults')
        SpellSearchResult(:spell='spell' :key='spell.id')
    .spell-search__empty-state(v-if='searchResults.length === 0')
      p There are no spells matching your search
</template>

<script lang='ts'>
import Vue from 'vue'
import { Spell } from '@/types'
import SpellSearchResult from '@/components/SpellSearchResult.vue'
import spellFilter from '@/util/spell-filter'

export default Vue.extend({
  name: 'SpellSearch',
  data () {
    return {
      searchInput: '',
    }
  },
  computed: {
    spells (): Array<Spell> {
      return Object.values(this.$store.state.spells)
    },
    searchResults (): Array<Spell> {
      return spellFilter.searchFilter(this.spells, this.searchInput)
    },
  },
  components: {
    SpellSearchResult,
  },
})
</script>

<style lang='scss' scoped>

.spell-search {
  @include flex-col;
  width: 100%;
  flex-grow: 1;
  max-width: 1000px;
  overflow: hidden;
}

.spell-search__input {
  margin-bottom: 32px;
  padding: 16px;
  box-shadow: -1px 4px 10px 0 rgba(0,0,0,.75);
  background: $color-panel-background;

  font-size: x-large;
  font-family: 'Noto Sans JP';
  color: $color-text;

  border: unset;
  border-radius: 2px;
}

.spell-search__results {
  @include flex-col;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
}

.spell-search__empty-state {
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
