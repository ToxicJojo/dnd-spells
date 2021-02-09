<template lang='pug'>
  .new-spell-book
    label Name
      input(type='text')
    ClassSelect(v-model='dndClass')
    button Create Spellbook
</template>

<script lang='ts'>
import Vue from 'vue'
import ClassSelect from '@/components/selects/ClassSelect.vue'

export default Vue.extend({
  name: 'NewSpellBook',
  data () {
    return {
      dndClass: 'Wizard',
    }
  },
  components: {
    ClassSelect,
  },
})
</script>

<style lang='scss' scoped>

.new-spell-book {
  @include flex-col;
}

</style>
