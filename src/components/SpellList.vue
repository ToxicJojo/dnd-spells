<template lang='pug'>
  ul.spell-list
    li(v-for='spell in filterdSpells')
      input(type='checkbox' v-model='selectedSpells' :value='spell')
      SpellListItem(:spell='spell')
    button.spell-list__fab(v-if='selectedSpells.length > 0' @click='addSpells') Add {{ selectedSpells.length }} {{ (selectedSpells.length === 1) ? 'Spell' : 'Spells'}} to Spellbook
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue'
import { Spell } from '@/types'
import SpellListItem from '@/components/SpellListItem.vue'
import spellFilter, { SpellFilter } from '@/util/spell-filter'

export default Vue.extend({
  name: 'SpellList',
  data () {
    return {
      selectedSpells: [],
    }
  },
  props: {
    filter: {
      type: Object as PropType<SpellFilter>,
      required: true,
    },
  },
  computed: {
    spells (): Array<Spell> {
      return Object.values(this.$store.state.spells)
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
  methods: {
    addSpells () {
      this.selectedSpells.forEach((spell) => {
        this.$store.commit('addToSpellBook', spell)
      })
      this.selectedSpells = []
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
  list-style: none;
  margin: 32px 0px;
  padding: 0;
  overflow: auto;

  li {
    @include flex-row;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
}

.spell-list__fab {
  position: absolute;
  bottom: 16px;
  right: 16px;

  height: 48px;
  padding: 16px;

  border: unset;
  border-radius: 16px;

  background-color: $color-fab-background;
  color: $color-panel-background;
  font-weight: bold;
  font-size: medium;
}

</style>
