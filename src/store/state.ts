import { SpellCollection } from '@/types'

/**
 * The main state for the Vuex store.
 */
export interface StoreState {
  spells: SpellCollection;
  spellBook: SpellCollection;
}

const state: StoreState = {
  spells: {},
  spellBook: {},
}

export default state
