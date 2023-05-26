import { expect, describe, it } from 'vitest';
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
});
