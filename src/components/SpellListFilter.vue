<template lang='pug'>
  .spell-list-filter
    input(:value='value.search' @input='update("search", $event.target.value)')
    button(@click='showFilter = !showFilter') Show Filter
    template(v-if='showFilter')
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
import { Filter } from '@/util/spell-filter'

export default Vue.extend({
  name: 'SpellListFilter',
  data () {
    return {
      showFilter: true,
    }
  },
  props: {
    value: {
      type: Object as PropType<Filter>,
      required: true,
    },
  },
  methods: {
    update (key: string, value: any) {
      if (key === 'level') {
        value = Number(value)
      }
      this.$emit('input', { ...this.value, [key]: value })
    },
  },
})
</script>

<style lang='scss' scoped>

.spell-list-filter {
  @include flex-col;

  input {
    padding: 8px;
    font-size: large;
    background: $color-panel-background;
    border: unset;
    margin-bottom: 8px;
  }

  label {
    color: #eee;
    font-size: large;
    text-align: center;
  }

  select {
    padding: 16px;
    margin: 8px 0px;
    border-radius: 16px;
    border: 2px solid;
    width: 100%;
    background: $color-panel-background;
    font-size: large;
  }
}

</style>
