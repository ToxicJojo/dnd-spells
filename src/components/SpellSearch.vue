<template lang='pug'>
  .spell-search
    input.spell-search__input(type='text' v-model='searchInput' placeholder='Search a spell')
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
  display: flex;
  flex-direction: column;
}

.spell-search__input {
  height: 64px;
  font-size: 36px;
  border-radius: 2px;
}

.spell-search__results {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

</style>
