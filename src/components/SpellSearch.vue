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

</style>
