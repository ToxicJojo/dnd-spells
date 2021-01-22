import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import SpellListView from '@/views/SpellListView.vue'
import SpellList from '@/components/SpellList.vue'
import SpellDetail from '@/components/SpellDetail.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
