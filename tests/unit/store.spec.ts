import { expect } from 'chai'
import sinon, { SinonSpy } from 'sinon'
import { Spell, SpellCollection } from '@/types'
import { StoreState } from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import { ActionContext, Commit } from 'vuex'

const emptyState = (): StoreState => {
  return {
    spells: {
    },
  }
}

const acidSplash: Spell = {
  id: 'acid-splash',
  name: 'Acid Splash',
  levelName: 'Cantrip',
  classes: [
    'Sorcerer',
    'Wizard',
  ],
  level: 0,
  school: 'C',
  ritual: false,
  time: '1 action',
  range: '60 feet',
  components: [
    'V',
    'S',
  ],
  duration: 'Instantaneous',
  text: 'You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\nThis spell\'s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).\nSource: Player\'s Handbook p. 211',
  roll: [
    '1d6',
    '2d6',
    '3d6',
    '4d6',
  ],
}

describe('Vuex - Store', () => {
  describe('Mutations', () => {
    describe('#setSpells', () => {
      it('sets the spells correctly', () => {
        const state = emptyState()
        const spellCollection: SpellCollection = {
        }
        spellCollection[acidSplash.id] = acidSplash

        mutations.setSpells(state, spellCollection)

        expect(state.spells).to.have.property(acidSplash.id)
        expect(state.spells[acidSplash.id]).to.be.eq(acidSplash)
      })
    })
    describe('#addSpell', () => {
      it('adds spells correctly to an empty store', () => {
        const state = emptyState()

        mutations.addSpell(state, acidSplash)

        expect(state.spells).to.have.property(acidSplash.id)
        expect(state.spells[acidSplash.id]).to.be.eq(acidSplash)
      })
    })

    describe('#removeSpell', () => {
      it('removes the spell correctly from the store', () => {
        const state = emptyState()
        mutations.addSpell(state, acidSplash)
        mutations.removeSpell(state, acidSplash.id)

        expect(state.spells).to.not.have.property(acidSplash.id)
      })
    })
  })

  describe('Actions', () => {
    describe('#loadSpells', () => {
      const fakeActionContext = {} as ActionContext<StoreState, any>

      it('commits the loaded spells to the store', async () => {
        const commit = sinon.fake() as Commit
        fakeActionContext.commit = commit
        await actions.loadSpells(fakeActionContext)

        expect((commit as SinonSpy).calledOnce).to.equal(true)
        expect((commit as SinonSpy).calledWith('setSpells')).to.equal(true)
      })
    })
  })
})
