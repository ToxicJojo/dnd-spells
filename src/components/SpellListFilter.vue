<template lang='pug'>
  .spell-list-filter
    input(:value='value.search' @input='update("search", $event.target.value)')
    label School
    select(:value='value.school' @input='update("school", $event.target.value)')
      option(value='All') All
      option(value='Abjuration') Abjuration
      option(value='Conjuration') Conjuration
      option(value='Divination') Divination
      option(value='Enchantment') Entchantment
      option(value='Evocation') Evocation
      option(value='Illusion') Illusion
      option(value='Necromancy') Necromancy
    label Class
      select(:value='value.class' @input='update("class", $event.target.value)')
        option(value='All') All
        option(value='Artificer') Artificer
        option(value='Bard') Bard
        option(value='Cleric') Cleric
        option(value='Druid') Druid
        option(value='Paladin') Paladin
        option(value='Ranger') Ranger
        option(value='Sorcerer') Sorcerer
        option(value='Warlock') Warlock
        option(value='Wizard') Wizard
    label Level
      select(:value='value.level' @input='update("level", $event.target.value)')
        option(:value='-1') All
        option(:value='0') Cantrip
        option(:value='1') 1st
        option(:value='2') 2nd
        option(:value='3') 3rd
        option(:value='4') 4th
        option(:value='5') 5th
        option(:value='6') 6th
        option(:value='7') 7th
        option(:value='8') 8th
        option(:value='9') 9th
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue'

interface Filter {
  search: string;
  school: string;
  class: string;
  level: number;
}

export default Vue.extend({
  name: 'SpellListFilter',
  props: {
    value: {
      type: Object as PropType<Filter>,
      required: true,
    },
  },
  methods: {
    update (key: string, value: any) {
      this.$emit('input', { ...this.value, [key]: value })
    },
  },
})
</script>

<style lang='scss' scoped>

</style>
