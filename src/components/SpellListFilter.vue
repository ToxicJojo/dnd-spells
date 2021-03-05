<template lang='pug'>
  .spell-list-filter
    .spell-list-filter__input
      input(:value='value.search' @input='update("search", $event.target.value)' placeholder='Spellname')
      button(@click='showFilter = !showFilter')
        template(v-if='!showFilter') Show Filter
        template(v-else) Hide Filter
    .spell-list-filter__row
      template(v-if='showFilter')
        label School
          SchoolSelect(includeAllOption :value='value.school' @input='update("school", $event)')
        label Class
          ClassSelect(includeAllOption :value='value.class' @input='update("class", $event)')
        label Level
          LevelSelect(includeAllOption :value='value.level' @input='update("level", $event)')
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue'
import { SpellFilter } from '@/util/spell-filter'
import ClassSelect from '@/components/selects/ClassSelect.vue'
import SchoolSelect from '@/components/selects/SchoolSelect.vue'
import LevelSelect from '@/components/selects/LevelSelect.vue'

export default Vue.extend({
  name: 'SpellListFilter',
  data () {
    return {
      showFilter: false,
    }
  },
  props: {
    value: {
      type: Object as PropType<SpellFilter>,
      required: true,
    },
  },
  components: {
    ClassSelect,
    SchoolSelect,
    LevelSelect,
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
  }

  label {
    color: #eee;
    font-size: large;
    text-align: center;
    flex-basis: 100%;
    @media (min-width: 800px) {
      flex-basis: 33%;
      padding: 8px;
    }
  }
}

.spell-list-filter__input {
  @include flex-col;

  @media (min-width: 500px) {
    @include flex-row;
  }
  margin-bottom: 8px;
  flex-basis: 100%;

  button {
    background-color: $color-panel-background;
    border: none;
    padding: 8px;
    font-size: large;
    font-weight: bold;
    color: $color-accent;
  }

  input {
    flex-grow: 1;
  }
}

.spell-list-filter__row {
  @include flex-row;
  flex-wrap: wrap;
}

</style>
