import { expect } from 'chai'
import spellCollection from '../test-spells.json'
import spellFilter from '@/util/spell-filter'
import { Spell } from '@/types'

const spells = Object.values(spellCollection) as Spell[]

describe('Spell Filter', () => {
  describe('#searchFilter', () => {
    it('returns an empty array when the search term is empty', () => {
      const searchResult = spellFilter.searchFilter(spells, '')

      expect(searchResult).to.have.lengthOf(0)
    })

    it('returns spells when the search term is the beginning of the name', () => {
      const searchResult = spellFilter.searchFilter(spells, 'animal')

      expect(searchResult).to.have.lengthOf(2)
    })

    it('returns spells when the search term is in the middle of the name', () => {
      const searchResult = spellFilter.searchFilter(spells, 'animal')

      expect(searchResult).to.have.lengthOf(2)
    })

    it('returns spells when the search term is the end of the name', () => {
      const searchResult = spellFilter.searchFilter(spells, 'splash')

      expect(searchResult).to.have.lengthOf(1)
    })

    it('returns no spells when the search does not match a spell', () => {
      const searchResult = spellFilter.searchFilter(spells, 'abdcefgh')

      expect(searchResult).to.have.lengthOf(0)
    })
  })

  describe('#schoolFilter', () => {
    it('returns no spells when the school does not match a spell', () => {
      const searchResult = spellFilter.schoolFilter(spells, 'abdcefgh')

      expect(searchResult).to.have.lengthOf(0)
    })

    it('returns the right spells for the school', () => {
      const searchResult = spellFilter.schoolFilter(spells, 'Enchantment')

      expect(searchResult).to.have.lengthOf(2)
      expect(searchResult[0].name).to.eq('Animal Friendship')
      expect(searchResult[1].name).to.eq('Animal Messenger')
    })
  })

  describe('#classFilter', () => {
    it('returns no spells when the class does not match a spell', () => {
      const searchResult = spellFilter.classFilter(spells, 'not-a-real-class')

      expect(searchResult).to.have.lengthOf(0)
    })

    it('returns the right spells for the class', () => {
      const searchResult = spellFilter.classFilter(spells, 'Wizard')

      expect(searchResult).to.have.lengthOf(3)
    })
  })

  describe('#levelFilter', () => {
    it('returns no spells when the level does not match a spell', () => {
      const searchResult = spellFilter.levelFilter(spells, 12)

      expect(searchResult).to.have.lengthOf(0)
    })

    it('returns the right spells for the level', () => {
      const searchResult = spellFilter.levelFilter(spells, 0)

      expect(searchResult).to.have.lengthOf(1)
    })
  })
})
