/**
 * Represents a single spell in DnD 5e.
 * @see For more information on how spells work in 5e
 * https://www.dndbeyond.com/sources/basic-rules/spellcasting.
 */
export interface Spell {
  id: string;
  /**
   * The name of the spell.
   */
  name: string;
  /**
   * An array containing all the classes that are able to use this spell.
   */
  classes: Array<string>;
  /**
   * The spell level of the spell.
   */
  level: number;
  /**
   * A string representation of the spells level
   * @example
   * 'Cantrip'
   * '1st Level'
   * '2nd Level'
   */
  levelName: string;
  /**
   * The school of magic the spell belongs to.
   */
  school: string;
  /**
   * Indicates whether the spell is a ritual or not.
   */
  ritual: boolean;
  /**
   * The time it takes to cast the spell.
   */
  time: string;
  /**
   * The range of the spell.
   */
  range: string;
  /**
   * An array containing the required components of the spell.
   */
  components: Array<string>;
  /**
   * The material component that is needed.
   */
  materialComponent?: string;
  /**
   * The duration during which the spells effect last.
   */
  duration: string;
  /**
   * The rules text of the spell.
   */
  text: string;
  /**
   * An array containing dice roll associated with the spell.
   */
  roll: Array<string>;
}
/**
 * Represents a collection of 5e spells.
 * Each spell is a property of the spell collection and can be accessed by its id.
 * @example
 * const collection: SpellCollection = ...
 * collection.fireball
 * collection['acid-splash']
 */
export interface SpellCollection {
  [key: string]: Spell;
}
