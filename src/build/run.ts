import { readFile, writeFile, mkdirSync } from 'fs'
import { Parser } from 'xml2js'
import { Spell, SpellCollection } from '../types'

/**
 * Represents the result of parsing an xml collection file containing the data for 5e.
 * The xml files are generated by https://github.com/kinkofer/FightClub5eXML.
 */
interface XMLParseResult {
  compendium: XMLParsedCompendium;
}

/**
 * Represents a compendium that has been created from an xml by xml2js.
 */
interface XMLParsedCompendium {
  spell: Array<XMLParsedSpell>;
}

/**
 * Represents a the result of parsing a single spell from xml to a js object.
 * The parsing is done by xml2js and will generate an object with an array of values for each xml tag parsed.
 * For Most properties the array will only contain a single value.
 */
interface XMLParsedSpell {
  name: Array<string>;
  classes: Array<string>;
  level: Array<string>;
  school: Array<string>;
  ritual: Array<string>;
  time: Array<string>;
  range: Array<string>;
  components: Array<string>;
  duration: Array<string>;
  text: Array<string>;
  roll: Array<string>;
}

/**
 * Converts a spell name to an id that can be used as an object property name.
 */
const nameToId = (name: string) => {
  // Lowercase the name and replace all whitespace with a '-'.
  let id = name.toLowerCase()
  id = id.replace(/ /g, '-')
  id = id.replace(/\//g, '-')
  return id
}

const spellSchoolMap = new Map<string, string>()
spellSchoolMap.set('A', 'Abjuration')
spellSchoolMap.set('C', 'Conjuration')
spellSchoolMap.set('D', 'Divination')
spellSchoolMap.set('EV', 'Evocation')
spellSchoolMap.set('EN', 'Enchantment')
spellSchoolMap.set('I', 'Illusion')
spellSchoolMap.set('N', 'Necromancy')
spellSchoolMap.set('T', 'Transmutation')

const spellLevelToString = (spellLevel: string) => {
  if (spellLevel === '0') {
    return 'Cantrip'
  } if (spellLevel === '1') {
    return '1th Level'
  } else if (spellLevel === '2') {
    return '2nd Level'
  } else if (spellLevel === '3') {
    return '3rd Level'
  } else {
    return `${Number.parseInt(spellLevel)}th Level`
  }
}

const buildTable = (match: string, head: string, cells: string) => {
  const headerCols = head.split('|')

  const tableHeadCols = headerCols.reduce((res, col) => {
    return `${res}<th>${col}</th>`
  }, '')

  const tableHead = `<thead><tr>${tableHeadCols}</tr></thead>`

  const tableBodyRows = cells.split('\n')
  let tableBody = '<tbody>'

  tableBodyRows.forEach((bodyRow) => {
    const bodyRowCols = bodyRow.split('|')
    let row = '<tr>'
    bodyRowCols.forEach((col) => {
      row = `${row}<td>${col}</td>`
    })
    row = `${row}</tr>`

    tableBody = `${tableBody}${row}`
  })

  const table = `<table>${tableHead}${tableBody}</table>\n`
  return table
}

const convertSpellText = (spellText: string) => {
  // Convert markdown tables to html
  let convertedText = spellText.replace(/^(.*\|.*\|.*)\n((?:.*\|.*\|.*\n)*)*/gm, buildTable)
  // Double the line breaks so the spell text will be easier to read.
  convertedText = convertedText.replace(/\n/g, '\n\n')
  // Make the Higher levels line bold and remove one of the linebreaks
  convertedText = convertedText.replace(/At Higher Levels:\n/g, '<strong>At Higher Levels:</strong>')
  // Make all the text that describe certain parts of a spell bold. (see https://regex101.com/r/s6YPL8/1 for regexp information)
  convertedText = convertedText.replace(/\n(.*):/g, '\n<strong>$1:</strong>')

  return convertedText
}

const convertComponents = (components: string) => {
  const componentsWithoutMaterial = components.split('(')
  return componentsWithoutMaterial[0].split(', ')
}

/**
 * Converts a XMLParsedSpell to an actual usable Spell object.
 * @param parsedSpell The XMLParsedSpell that will be converted.
 */
const convertSpell = (parsedSpell: XMLParsedSpell) => {
  const spell: Spell = {
    id: nameToId(parsedSpell.name[0]),
    name: parsedSpell.name[0],
    classes: parsedSpell.classes[0].split(', '),
    level: Number.parseFloat(parsedSpell.level[0]),
    levelName: spellLevelToString(parsedSpell.level[0]),
    school: spellSchoolMap.get(parsedSpell.school[0])!,
    ritual: parsedSpell.ritual[0] === 'YES',
    time: parsedSpell.time[0],
    range: parsedSpell.range[0],
    components: convertComponents(parsedSpell.components[0]),
    duration: parsedSpell.duration[0],
    text: convertSpellText(parsedSpell.text[0]),
    roll: parsedSpell.roll,
  }

  // If there are material components add them to the spell.
  if (spell.components[spell.components.length - 1].startsWith('M')) {
    // The material component is within the brackets
    const materialComponentRegExp = new RegExp(/.*(\(.*\))/)
    const resultGroup = materialComponentRegExp.exec(parsedSpell.components[0])
    spell.materialComponent = resultGroup ? resultGroup[1] : ''
    spell.materialComponent = spell.materialComponent.replace('(', '')
    spell.materialComponent = spell.materialComponent.replace(')', '')
    spell.components[spell.components.length - 1] = 'M*'
  }

  return spell
}

/**
 * Parses a xml file using xml2js and returns a promise that will resolve to a js object containing the data from the xml file.
 * @param xmlFilePath The file path to the xml file.
 */
const parseXMLFile = (xmlFilePath: string): Promise<XMLParseResult> => {
  return new Promise((resolve, reject) => {
    const parser = new Parser()
    readFile(`${__dirname}/${xmlFilePath}`, (_, data) => {
      parser.parseString(data, (error: any, result: XMLParseResult) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  })
}

/**
 * Takes an object and writes its JSON representation to a file.
 * @param fileName The name of the file to write to.
 * @param obj The object that will be used to generate the json.
 */
const objectToJsonFile = (fileName: string, obj: object) => {
  return new Promise((resolve, reject) => {
    const json = JSON.stringify(obj)
    mkdirSync(`${__dirname}/../../src/data`, { recursive: true })
    writeFile(`${__dirname}/${fileName}`, json, resolve)
  })
}

(async () => {
  console.log('Staring to create spells.json')
  const collectionFilePath = '../../data/CoreRulebooks.xml'
  const parseResult = await parseXMLFile(collectionFilePath)
  const spellList = parseResult.compendium.spell.map(convertSpell)

  // Create one SpellCollection object that has each spell a property
  const spells: SpellCollection = {}
  for (const spell of spellList) {
    spells[spell.id] = spell
  }

  await objectToJsonFile('../../src/data/spells.json', spells)
  console.log('Finished to create spells.json')
})()
