import Vue from 'vue'
import { Spell, SpellCollection } from '@/types'
import { StoreState } from './state'

const mutations = {
  setSpells (state: StoreState, spells: SpellCollection) {
    state.spells = spells
  },
  addSpell (state: StoreState, spell: Spell) {
    Vue.set(state.spells, spell.id, spell)
  },
  removeSpell (state: StoreState, spellId: string) {
    Vue.delete(state.spells, spellId)
  },
}

export default mutations
