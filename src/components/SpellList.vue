<template lang='pug'>
  .spell-list
    .spell-list__filter
    ul.spell-list__results
      li(v-for='spell in filterdSpells')
        input(type='checkbox')
        SpellListItem(:spell='spell')
</template>

<script lang='ts'>
import Vue from 'vue'
import { Spell, SpellCollection } from '@/types'
import SpellListItem from '@/components/SpellListItem.vue'
import spellFilter from '@/util/spell-filter'

export default Vue.extend({
  name: 'SpellList',
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  computed: {
    spells (): SpellCollection {
      return this.$store.state.spells
    },
    filterdSpells (): Array<Spell> {
      let filterdSpells = Object.values(this.spells)
      if (this.filter.search !== '') {
        filterdSpells = spellFilter.searchFilter(this.spells, this.filter.search)
      }

      if (this.filter.school !== 'All') {
        filterdSpells = spellFilter.schoolFilter(filterdSpells, this.filter.school)
      }

      if (this.filter.class !== 'All') {
        filterdSpells = spellFilter.classFilter(filterdSpells, this.filter.class)
      }

      if (this.filter.level !== -1) {
        filterdSpells = spellFilter.levelFilter(filterdSpells, this.filter.level)
      }

      return filterdSpells
    },
  },
  components: {
    SpellListItem,
  },
})
</script>

<style lang='scss' scoped>

.spell-list {
  @include flex-col;
  margin-bottom: 32px;
}

.spell-list__filter {
  @include flex-col;
}

.spell-list__table {
  background-color: $color-panel-background;
  margin: 0 -32px;
}

.spell-list__results {
  @include flex-col;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    @include flex-row;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
}

</style>
