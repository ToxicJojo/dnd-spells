import Vue from 'vue'
import { Spell, SpellBook, SpellCollection } from '@/types'
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
  addSpellBook (state: StoreState, spellBook: SpellBook) {
    Vue.set(state.spells, spellBook.id, spellBook)
  },
  setSpellBook (state: StoreState, spellBook: SpellCollection) {
    state.spellBook = spellBook
  },
  addToSpellBook (state: StoreState, spell: Spell) {
    Vue.set(state.spellBook, spell.id, spell)
  },
  removeFromSpellBook (state: StoreState, spellId: string) {
    Vue.delete(state.spellBook, spellId)
  },
}

export default mutations
