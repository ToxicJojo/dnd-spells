import { readFile, writeFile } from 'fs'
import { Parser } from 'xml2js'

interface XMLParseResult {
  compendium: Compendium;
}

interface Compendium {
  spell: Array<XMLParsedSpell>;
}

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

interface Spell {
  id: string;
  name: string;
  classes: Array<string>;
  level: number;
  school: string;
  ritual: boolean;
  time: string;
  range: string;
  components: Array<string>;
  duration: string;
  text: string;
  roll: Array<string>;
}

const nameToId = (name: string) => {
  let id = name.toLowerCase()
  id = id.replace(/ /g, '-')
  return id
}

const convertSpell = (parsedSpell: XMLParsedSpell) => {
  const spell: Spell = {
    id: nameToId(parsedSpell.name[0]),
    name: parsedSpell.name[0],
    classes: parsedSpell.classes[0].split(', '),
    level: Number.parseInt(parsedSpell.level[0]),
    school: parsedSpell.school[0],
    ritual: parsedSpell.ritual[0] === 'YES',
    time: parsedSpell.time[0],
    range: parsedSpell.range[0],
    components: parsedSpell.components[0].split(', '),
    duration: parsedSpell.duration[0],
    text: parsedSpell.text[0],
    roll: parsedSpell.roll,
  }

  return spell
}

const parseXMLFile = (collectionFilePath: string): Promise<XMLParseResult> => {
  return new Promise((resolve, reject) => {
    const parser = new Parser()
    console.log(__dirname)
    readFile(`${__dirname}/${collectionFilePath}`, (_, data) => {
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

const writeSpellList = (fileName: string, spellList: SpellList) => {
  return new Promise((resolve, reject) => {
    const json = JSON.stringify(spellList)
    writeFile(`${__dirname}/${fileName}`, json, resolve)
  })
}

interface SpellList {
  [key: string]: Spell;
}

(async () => {
  console.log('Staring to create spells.json')
  const collectionFilePath = '../data/CoreRulebooks.xml'
  const parseResult = await parseXMLFile(collectionFilePath)
  const spellList = parseResult.compendium.spell.map(convertSpell)

  const spells: SpellList = {}
  for (const spell of spellList) {
    spells[spell.id] = spell
  }

  await writeSpellList('../src/data/spells.json', spells)
  console.log('Finished to create spells.json')
})()
