<template lang="pug">
  select(:value='value' @input='$emit("input", $event.target.value)')
    option(v-if='includeAllOption' value=-1) All
    option(v-for='level in levels' :value='level.value') {{ level.name }}
</template>

<script lang="ts">
import Vue from 'vue'
import selectMixin from './select-mixin'
import levels from '@/data/levels.json'

export default Vue.extend({
  name: 'ClassSelect',
  data () {
    return {
      levels,
    }
  },
  mixins: [selectMixin],
})
</script>
