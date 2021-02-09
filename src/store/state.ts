import { SpellBookCollection, SpellCollection } from '@/types'

/**
 * The main state for the Vuex store.
 */
export interface StoreState {
  spells: SpellCollection;
  spellBooks: SpellBookCollection;
  spellBook: SpellCollection;
}

const state: StoreState = {
  spells: {},
  spellBooks: {},
  spellBook: {},
}

export default state
