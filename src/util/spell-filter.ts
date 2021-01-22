import { Spell, SpellCollection } from '@/types'

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

const schoolFilter = (spellList: Array<Spell>, school: string) => {
  return spellList.filter((spell) => {
    return spell.school === school
  })
}

const classFilter = (spellList: Array<Spell>, className: string) => {
  return spellList.filter((spell) => {
    return spell.classes.includes(className)
  })
}

const levelFilter = (spellList: Array<Spell>, spellLevel: number) => {
  return spellList.filter((spell) => {
    return spell.level === spellLevel
  })
}

export default {
  classFilter,
  searchFilter,
  schoolFilter,
  levelFilter,
}
