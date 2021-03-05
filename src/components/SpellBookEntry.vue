<template lang='pug'>
  .spell-book-entry(@click='$router.push(`/spells/${spell.id}`)')
    span.spell-book-entry__title {{ spell.name }}
    span.spell-book-entry__sub-title {{ spell.school }} {{ spell.levelName }}
    button.spell-book-entry__remove-button(@click.stop='removeEntry') Remove from Spell Book
</template>

<script lang='ts'>
import { Spell } from '@/types'
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'SpellBookEntry',
  props: {
    spell: {
      type: Object as PropType<Spell>,
      required: true,
    },
  },
  methods: {
    removeEntry () {
      this.$store.commit('removeFromSpellBook', this.spell.id)
    },
  },
})
</script>

<style lang='scss' scoped>

.spell-book-entry {
  @include flex-col;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background: $color-panel-background;
  width: 100%;

  .spell-book-entry__title {
    font-size: x-large;
  }

  .spell-book-entry__sub-title {
    color: $color-text-light;
  }

  .spell-book-entry__remove-button {
    height: 48px;
    padding: 16px;
    margin-top: 24px;

    border: unset;
    border-radius: 16px;

    background-color: rgb(207, 51, 51);
    color: $color-panel-background;
    font-weight: bold;
  }
}

</style>
