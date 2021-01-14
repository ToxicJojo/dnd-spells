import { SpellCollection } from '@/types'

/**
 * The main state for the Vuex store.
 */
export interface StoreState {
  spells: SpellCollection;
}

const state: StoreState = {
  spells: {},
}

export default state
