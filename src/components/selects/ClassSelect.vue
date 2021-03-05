<template lang="pug">
  select(:value='value' @input='$emit("input", $event.target.value)')
    option(v-if='includeAllOption' value='All') All
    option(v-for='dndClass in classes' :value='dndClass.value') {{ dndClass.name }}
</template>

<script lang="ts">
import Vue from 'vue'
import classes from '@/data/classes.json'

export default Vue.extend({
  name: 'ClassSelect',
  data () {
    return {
      classes,
    }
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    includeAllOption: {
      type: Boolean,
      required: false,
    },
  },
})
</script>
