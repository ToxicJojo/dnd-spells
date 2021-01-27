<template lang='pug'>
  .spell-detail
    .spell-detail__close(@click='$router.back()')
      CloseIcon
    .spell-detail__title
      h1 {{ spell.name }}
      p {{ spell.levelName }} {{ spell.school }}
    SpellInfo(:spell='spell')

</template>

<script lang='ts'>
import Vue from 'vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import SpellInfo from '@/components/SpellInfo.vue'

export default Vue.extend({
  name: 'SpellDetail',
  components: {
    CloseIcon,
    SpellInfo,
  },
  computed: {
    spell () {
      return this.$store.state.spells[this.$route.params.spellId]
    },
  },
})
</script>

<style lang='scss' scoped>

hr {
  width: 100%;
}

.spell-detail__title {
  text-align: center;

  h1 {
    font-size: x-large;
    color: $color-text-heading;
    margin: 0 0 4px 0;
  }

  p {
    color: $color-text-light;
    margin: 0;
    margin-bottom: 8px;
  }
}

.spell-detail {
  @include flex-col;
  align-items: center;
  background: $color-panel-background;
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
  position: relative;
  overflow-y: auto;
}

.spell-detail__close {
  position: absolute;
  left: 8px;
  top: 8px;
  cursor: pointer;
}

.spell-detail__property-row {
  @include flex-row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

.spell-detail__property {
  @include flex-col;
  text-align: center;
  padding: 16px;
  flex: 50%;

  @media (min-width: 650px) {
    flex: 25%;
  }
}

.spell-detail__text {
  white-space: pre-line;
}

</style>
