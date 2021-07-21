<template lang="pug">
  select(:value='value' @input='$emit("input", $event.target.value)')
    option(v-if='includeAllOption' value='All') All
    option(v-for='school in schools' :value='school.value') {{ school.name }}
</template>

<script lang="ts">
import Vue from 'vue'
import selectMixin from './select-mixin'
import schools from '@/data/schools.json'

export default Vue.extend({
  name: 'ClassSelect',
  data () {
    return {
      schools,
    }
  },
  mixins: [selectMixin],
})
</script>
