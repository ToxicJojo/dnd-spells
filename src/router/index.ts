import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SpellSearch from '../views/SpellSearch.vue'
import SpellListView from '@/views/SpellListView.vue'
import SpellList from '@/components/SpellList.vue'
import SpellDetail from '@/components/SpellDetail.vue'
import SpellBookView from '@/views/SpellBookView.vue'
import NewSpellBook from '@/views/NewSpellBook.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Spell Search',
    component: SpellSearch,
  },
  {
    path: '/spells',
    name: 'Spell List',
    component: SpellListView,
    children: [
      {
        path: '/',
        component: SpellList,
      },
      {
        path: ':spellId',
        name: 'Spell Details',
        component: SpellDetail,
      },
    ],
  },
  {
    path: '/spell-book',
    name: 'Spell Book',
    component: SpellBookView,
  },
  {
    path: '/spell-book/new',
    name: 'New SpellBook',
    component: NewSpellBook,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
