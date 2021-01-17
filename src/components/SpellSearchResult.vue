<template lang="pug">
  .spell-search-result
    .spell-search-result__preview(@click='showDetails = !showDetails')
      .spell-search-result__title
        span {{ spell.name }}
        span {{ spell.levelName }} {{ spell.school }}
      svg( xmlns='http://www.w3.org/2000/svg' viewbox='0 0 24 24' fill='black' width='18px' height='18px')
        path(d='M0 0h24v24H0z' fill='none')
        path(d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z')
    .spell-search-result__detail(v-if='showDetails')
      span {{ spell.text }}
      .spell-search-result__detail-row
        .spell-search-result__detail-column
          span Casting Time:
          span {{ spell.time }}
        .spell-search-result__detail-column
          span Range/Area:
          span {{ spell.range }}
      .spell-search-result__detail-row
        .spell-search-result__detail-column
          span Duration:
          span {{ spell.duration }}
        .spell-search-result__detail-column
          span Components:
          span
            template(v-for='(component, key) in spell.components')
              template(v-if='key !== 0')
                | ,
              | {{ component }}

</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Spell } from '@/types'

export default Vue.extend({
  name: 'SpellSearchResult',
  data () {
    return {
      showDetails: false,
    }
  },
  props: {
    spell: {
      type: Object as PropType<Spell>,
      required: true,
    },
  },
})
</script>

<style lang='scss' scoped>

.spell-search-result {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 100%;
  margin: 16px 0px;
}

.spell-search-result__preview {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 16px;
}

.spell-search-result__title {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
}

.spell-search-result__detail {
  padding: 16px;
}

.spell-search-result__detail-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
}

.spell-search-result__detail-column {
  display: flex;
  flex-direction: column;
}

</style>
