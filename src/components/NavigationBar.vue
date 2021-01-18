<template lang='pug'>
  nav.navigation-bar
    ul
      li
        router-link.navigation-bar__item(to='/' exact active-class='navigation-bar__item--active')
          SearchIcon
          | Spell Search
      li
        router-link.navigation-bar__item(to='/spells' active-class='navigation-bar__item--active')
          SpellListIcon
          | Spell List
      li
        router-link.navigation-bar__item(to='/spell-book' active-class='navigation-bar__item--active')
          SpellBookIcon
          | Spell Book

</template>

<script lang='ts'>
import Vue from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import SpellListIcon from '@/components/icons/SpellListIcon.vue'
import SpellBookIcon from '@/components/icons/SpellBookIcon.vue'

export default Vue.extend({
  name: 'NavigationBar',
  components: {
    SearchIcon,
    SpellListIcon,
    SpellBookIcon,
  },
  computed: {
  },
})
</script>

<style lang='scss' scoped>

.navigation-bar {
  @include flex-row;
  padding: 16px;
  background: $color-panel-background;
  box-shadow: 0px -2px 10px 0 rgba(0,0,0,.75);
  z-index: 1;
  width: 100%;

  ul {
    @include flex-row;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
}

.navigation-bar__item {
  @include flex-col;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  font-size: small;
  color: $color-accent;
  opacity: .6;
  fill: $color-accent;
}

.navigation-bar__item--active {
  font-weight: bold;
  opacity: 1;
}

</style>
