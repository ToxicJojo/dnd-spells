<template lang="pug">
  .spell-search-result
    .spell-search-result__preview(@click='showDetails = !showDetails')
      .spell-search-result__title
        h2 {{ spell.name }}
        p {{ spell.levelName }} {{ spell.school }}
      svg(v-if='!showDetails' xmlns='http://www.w3.org/2000/svg' viewbox='0 0 24 24' fill='black' width='18px' height='18px')
        path(d='M0 0h24v24H0z' fill='none')
        path(d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z')
      svg(v-else xmlns='http://www.w3.org/2000/svg' viewbox='0 0 24 24' fill='black' width='18px' height='18px')
        path(d='M0 0h24v24H0z' fill='none')
        path(d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z')
    .spell-search-result__detail(v-if='showDetails')
      .spell-search-result__detail-row
        .spell-search-result__detail-entry
          strong Casting Time:
          span {{ spell.time }}
        .spell-search-result__detail-entry
          strong Range/Area:
          span {{ spell.range }}
        .spell-search-result__detail-entry
          strong Duration:
          span {{ spell.duration }}
        .spell-search-result__detail-entry
          strong Components:
          span
            template(v-for='(component, key) in spell.components')
              template(v-if='key !== 0')
                | ,
              | {{ component }}
      hr
      p {{ spell.text }}

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
  @include flex-col;
  border-radius: 8px;
  width: 100%;
  margin: 16px 0px;
  background-color: $color-panel-background;
  box-shadow: -1px 4px 10px 0 rgba(0,0,0,.75);
}

.spell-search-result__preview {
  @include flex-row;
  align-items: center;
  cursor: pointer;
  padding: 16px;
}

.spell-search-result__title {
  @include flex-col;
  flex-grow: 1;
  align-items: center;
  line-height: 1;

  h2 {
    font-size: larger;
    font-weight: bold;
    margin: 0 0 4px 0;
  }

  p {
    margin: 0;
    color: $color-text-light;
  }
}

.spell-search-result__detail {
  padding: 16px;
  white-space: pre-line;
}

.spell-search-result__detail-row {
  @include flex-row;
  justify-content: center;
  flex-wrap: wrap;
}

.spell-search-result__detail-entry {
  @include flex-col;
  flex: 50%;
  align-items: center;
  text-align: center;
  padding: 16px;

  @media (min-width: 650px) {
    flex: 25%;
  }

  span {
    opacity: .8;
  }
}

</style>
