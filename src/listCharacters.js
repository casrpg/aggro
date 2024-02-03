import { Character, defaultEquipment } from './Character.js';
import { printCharacterList } from './printCharactersList.js';

const legolas = new Character('Legolas',{...defaultEquipment, ac: 14});
const gimli = new Character('Gimli', {ac: 18, carryTwoHandWeapon: true});
const gandalf = new Character('Gandalf');
const aragorn = new Character('Aragorn', {...defaultEquipment, carryTwoHandWeapon: true});

const characters = [legolas, gimli, gandalf, aragorn];

printCharacterList(characters);
