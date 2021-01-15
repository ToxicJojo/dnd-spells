import { ActionContext } from 'vuex'
import { StoreState } from './state'

const actions = {
  async loadSpells ({ commit }: ActionContext<StoreState, any>) {
    const spells = (await import('@/data/spells.json')).default

    commit('setSpells', spells)
  },
}

export default actions
