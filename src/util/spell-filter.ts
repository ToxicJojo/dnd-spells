import { Spell } from '@/types'

/**
 * Represents the possible filters used for spell filtering.
 */
export interface Filter {
  search: string;
  school: string;
  class: string;
  level: number;
}

/**
 * Filters a spell array based on the spells name.
 * @param spellList The list of spells to filter
 * @param searchTerm The term to search for in the spell name
 */
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

/**
 * Filters a spell array based on the spell school.
 * @param spellList The list of spells to filter
 * @param school The school to filter for
 */
const schoolFilter = (spellList: Array<Spell>, school: string) => {
  return spellList.filter((spell) => {
    return spell.school === school
  })
}

/**
 * Filters a spell array based on the spells class.
 * @param spellList The list of spells to filer
 * @param className The class to search the spells classes for
 */
const classFilter = (spellList: Array<Spell>, className: string) => {
  return spellList.filter((spell) => {
    return spell.classes.includes(className)
  })
}

/**
 * Filters a spell array based on the spells level.
 * @param spellList The list of spells to filer
 * @param spellLevel The level to filter for
 */
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
