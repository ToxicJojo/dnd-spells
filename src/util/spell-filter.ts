import { Spell } from '@/types'

const searchFilter = (spellList: Array<Spell>, searchTerm: string) => {
  // Return an empty array if there is no search term
  if (searchTerm === '') {
    return []
  }

  return spellList.filter((spell) => {
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
