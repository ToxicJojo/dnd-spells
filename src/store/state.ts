import { SpellBookCollection, SpellCollection } from '@/types'

/**
 * The main state for the Vuex store.
 */
export interface StoreState {
  spells: SpellCollection;
  spellBooks: SpellBookCollection;
}

const state: StoreState = {
  spells: {},
  spellBooks: {},
}

export default state
