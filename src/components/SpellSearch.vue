<template lang='pug'>
  .spell-search
    input.spell-search__input(type='text' v-model='searchInput' ref='searchInput' placeholder='Search a spell')
    ul.spell-search__results
      li(v-for='spell in searchResults')
        SpellSearchResult(:spell='spell')
</template>

<script lang='ts'>
import Vue from 'vue'
import { Spell, SpellCollection } from '@/types'
import SpellSearchResult from '@/components/SpellSearchResult.vue'
import spellFilter from '@/util/spell-filter'

export default Vue.extend({
  name: 'SpellSearch',
  data () {
    return {
      searchInput: '',
    }
  },
  mounted () {
    (this.$refs.searchInput as HTMLInputElement).focus()
  },
  computed: {
    spells (): SpellCollection {
      return this.$store.state.spells
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
  overflow: hidden;
}

.spell-search__input {
  height: 64px;
  font-size: x-large;
  margin: 16px 0;
  padding: 16px;
  border: unset;
  border-radius: 2px;
  box-shadow: -1px 4px 10px 0 rgba(0,0,0,.75);
  background: $color-panel-background;
  color: $color-text;
  font-family: 'Noto Sans JP';
}

.spell-search__results {
  @include flex-col;
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>
