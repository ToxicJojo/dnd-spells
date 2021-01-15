<template lang='pug'>
  .spell-search
    input.spell-search__input(type='text' v-model='searchInput' placeholder='Search a spell')
    ul.spell-search__results
      li(v-for='spell in searchResults') {{ spell.name }}
</template>

<script lang='ts'>
import { Spell, SpellCollection } from '@/types'
import Vue from 'vue'

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
      // Return an empty array if there is no search term
      if (this.searchInput === '') {
        return []
      }

      const spellArray = Object.values(this.spells)

      return spellArray.filter((spell) => {
        // The 'i' flag causes the regular Expression to ignore case
        const searchRegExp = RegExp(this.searchInput, 'i')
        return searchRegExp.test(spell.name)
      })
    },
  },
})
</script>

<style lang='scss' scoped>

</style>
