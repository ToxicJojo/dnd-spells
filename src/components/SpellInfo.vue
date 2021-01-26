<template lang='pug'>
  .spell-info
    .spell-info__property-row
      .spell-info__property
        strong Casting Time:
        span {{ spell.time }}
      .spell-info__property
        strong Range/Area:
        span {{ spell.range }}
      .spell-info__property
        strong Duration:
        span {{ spell.duration }}
      .spell-info__property
        strong Components:
        span
            template(v-for='(component, key) in spell.components')
              template(v-if='key !== 0')
                | ,
              | {{ component }}
    hr
    p.spell-info__text(v-html='spell.text')
    strong Classes:
    span
      template(v-for='(className, key) in spell.classes')
        template(v-if='key !== 0')
          | ,
        | {{ className }}
</template>

<script lang='ts'>
import { Spell } from '@/types'
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'SpellInfo',
  props: {
    spell: {
      type: Object as PropType<Spell>,
      required: true,
    },
  },
})
</script>

<style lang='scss' scoped>

.spell-info {
  @include flex-col;
}

.spell-info__property-row {
  @include flex-row;
  flex-wrap: wrap;
}

.spell-info__property {
  @include flex-col;
  text-align: center;
  padding: 16px;
  flex: 50%;

  span {
    color: $color-text-light;
  }

  @media (min-width: 650px) {
    flex: 25%;
  }
}

.spell-info__text {
  white-space: pre-line;
}

</style>
