import { expect, describe, it, beforeEach } from 'vitest';
import { Character } from './Character';

describe('Character', () => {
  describe('constructor', () => {
    it('should set name, equipment', () => {
      const character = new Character('a name', {ac: 7, carryTwoHandWeapon: true});

      expect(character.name).toBe('a name');
      expect(character.equipment).toMatchObject({ac: 7, carryTwoHandWeapon: true});
    });

    it('should initialize AC 10 by default', () => {
      const character = new Character('name');

      expect(character.equipment).toBeDefined();
      expect(character.equipment.ac).toBe(10);
    });
  });

  describe('advantage factor', () => {
    let character;
    beforeEach(()=> {
      character = new Character();
    });

    it('should be 1 in a brand new character', () => {
      expect(character.advantageFactor).toBe(1);
    });


    it('should be 3/4 when character has disadvantage', () =>{
      character.giveDisAdvantage();

      expect(character.advantageFactor).toBe(3/4);
    });

    describe('for a character with advantage', () => {
      beforeEach(() => {
        character.giveAdvantage();
      });

      it('should have 5/4 factor', () => {
        expect(character.advantageFactor).toBe(5/4);
      });

      it('should not change the factor giving it advantage again', () => {
        character.giveAdvantage();

        expect(character.advantageFactor).toBe(5/4);
      });

      it('should have factor 3/4 after giving it disadvantage', () => {
        character.giveDisAdvantage();

        expect(character.advantageFactor).toBe(3/4);
      });

      it('should have factor 1 after resetting it', () => {
        character.resetAdvantage();

        expect(character.advantageFactor).toBe(1);
      });
    });
  });
});
