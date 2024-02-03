import { describe, expect, it } from 'vitest';
import { JsonCharactersRepository } from './JsonCharactersRepository';

describe('JsonCharactersRepository', () => {
  describe('constructor', () => {
    it('should require the path of the json file', () => {
      const instantiateRepoWithoutPath = () => {
        new JsonCharactersRepository();
      };

      expect(instantiateRepoWithoutPath).toThrowError();
    });

    it('should require json path to be a string', () => {
      const instantiateRepositoryWithNonStringPath = () => {
        new JsonCharactersRepository({jsonPath: null});
      };

      expect(instantiateRepositoryWithNonStringPath).toThrowError();
    });
  });
});
