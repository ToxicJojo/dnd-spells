<template lang='pug'>
  router-link(:to='"/spells/" + spell.id').spell-list-item
    span.spell-list-item__heading {{ spell.name }}
    span.spell-list-item__subheading
      span {{ spell.levelName }}
      span {{ spell.school }}
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue'
import { Spell } from '@/types'

export default Vue.extend({
  name: 'SpellListItem',
  props: {
    spell: {
      type: Object as PropType<Spell>,
      required: true,
    },
  },
})
</script>

<style lang='scss' scoped>

.spell-list-item {
  @include flex-col;
  @media (min-width: 500px) {
    @include flex-row;
  }

  align-items: center;
  justify-content: space-between;
  background: $color-panel-background;
  padding: 12px 12px;
  margin: 4px;
  flex-grow: 1;
  border-radius: 8px;
}

.spell-list-item__heading {
  color: $color-text-heading;
  font-weight: bold;
  flex-grow: 1;
}

.spell-list-item__subheading {
  font-size: small;
  color: $color-text-light;

  @include flex-row;
  align-items: center;
  flex-basis: 50%;

  span {
    display: inline-block;
    flex: 50%;
    white-space: nowrap;
    margin-left: 3px;
  }
}

</style>
