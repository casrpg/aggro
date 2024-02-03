export class JsonCharactersRepository {
  constructor({jsonPath}) {
    if( typeof jsonPath !== 'string') {
      throw new Error('jsonPath is required and must be a string');
    }
  }
}