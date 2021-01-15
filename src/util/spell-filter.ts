import { SpellCollection } from '@/types'

const searchFilter = (spellCollection: SpellCollection, searchTerm: string) => {
  // Return an empty array if there is no search term
  if (searchTerm === '') {
    return []
  }

  const spellArray = Object.values(spellCollection)

  return spellArray.filter((spell) => {
    // The 'i' flag causes the regular Expression to ignore case
    const searchRegExp = RegExp(searchTerm, 'i')
    return searchRegExp.test(spell.name)
  })
}

export default {
  searchFilter,
}
