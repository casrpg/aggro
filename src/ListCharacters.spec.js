import { expect, describe, it } from 'vitest';
import { Character } from './Character'
import { ListCharactersUseCase } from './ListCharactersUseCase';

describe('ListCharactersUseCase', () => {
    describe('Execute', () => {
        it('should return the list of characters from the repository', async () => {
            const storedCharacters = [
                new Character('Gandalf'),
            ]
            
            const charactersRepo = {
                async getAll() {
                    return storedCharacters
                }
            }
            const useCase = new ListCharactersUseCase({charactersRepo});
    
            const list = await useCase.Execute();
            
            expect(list).toHaveLength(1)
            expect(list[0].name).toEqual('Gandalf');
        })
    })
    
    describe('constructor', () => {
        it('should fail if characterRepo does not fulfill the CharacterRepo interface', () => {
            const notValidCharacterRepo = {}

            const instantiateUseCase = () => {
                new ListCharactersUseCase({notValidCharacterRepo});
            }

            expect(instantiateUseCase).toThrowError()
        })
    })
})