<template lang='pug'>
  router-link(:to='"/spells/" + spell.id').spell-list-item
    span.spell-list-item__heading {{ spell.name }}
    span.spell-list-item__subheading {{ spell.levelName }}
    span.spell-list-item__subheading {{ spell.school }}
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
  @include flex-row;
  align-items: flex-end;
  flex-grow: 1;
  background: $color-panel-background;
  padding: 4px 8px;
  margin: 4px;
}

.spell-list-item__heading {
  //font-size: large;
  color: $color-text-heading;
  font-weight: bold;
  flex-grow: 1;
}

.spell-list-item__subheading {
  font-size: small;
  color: $color-text-light;
}

</style>
