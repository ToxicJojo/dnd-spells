<template lang='pug'>
  .spell-list-view
    SpellListFilter(v-model='filter' v-if='!$route.params.spellId')
    router-view(:filter='filter')
</template>

<script lang='ts'>
import Vue from 'vue'
import SpellList from '@/components/SpellList.vue'
import SpellListFilter from '@/components/SpellListFilter.vue'
import { SpellFilter } from '@/util/spell-filter'

export default Vue.extend({
  name: 'SpellListview',
  data () {
    return {
      filter: {
        search: '',
        school: 'All',
        class: 'All',
        level: -1,
      } as SpellFilter,
    }
  },
  components: {
    SpellList,
    SpellListFilter,
  },
})
</script>

<style lang='scss' scoped>

.spell-list-view {
  @include flex-col;
  width: 100%;
  overflow: hidden;
}

</style>
