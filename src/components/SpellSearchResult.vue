<template lang="pug">
  .spell-search-result
    .spell-search-result__preview(@click='showDetails = !showDetails')
      .spell-search-result__title
        h2 {{ spell.name }}
        p {{ spell.levelName }} {{ spell.school }}
      ShowMoreIcon(v-if='!showDetails')
      ShowLessIcon(v-else)
    SpellInfo(:spell='spell' v-if='showDetails')
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Spell } from '@/types'
import ShowMoreIcon from '@/components/icons/ShowMoreIcon.vue'
import ShowLessIcon from '@/components/icons/ShowLessIcon.vue'
import SpellInfo from '@/components/SpellInfo.vue'

export default Vue.extend({
  name: 'SpellSearchResult',
  data () {
    return {
      showDetails: false,
    }
  },
  components: {
    ShowMoreIcon,
    ShowLessIcon,
    SpellInfo,
  },
  props: {
    spell: {
      type: Object as PropType<Spell>,
      required: true,
    },
  },
})
</script>

<style lang='scss'>

.spell-search-result {
  @include flex-col;
  border-radius: 8px;
  width: 100%;
  margin: 16px 0px;
  padding: 16px 24px;
  background-color: $color-panel-background;
  box-shadow: -1px 4px 10px 0 rgba(0,0,0,.75);
}

.spell-search-result__preview {
  @include flex-row;
  align-items: center;
  cursor: pointer;
}

.spell-search-result__title {
  @include flex-col;
  flex-grow: 1;
  align-items: center;
  line-height: 1;

  h2 {
    font-size: larger;
    font-weight: bold;
    color: $color-text-heading;
    margin: 0 0 4px 0;
  }

  p {
    margin: 0;
    color: $color-text-light;
  }
}

</style>
