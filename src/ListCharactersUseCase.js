export class ListCharactersUseCase {
  #charactersRepo;

  constructor({charactersRepo}){
    if (!charactersRepo.getAll) {
      throw new Error('characterRepo should be a CharacterRepository');
    }
    this.#charactersRepo = charactersRepo;
  }

  async Execute() {
    return this.#charactersRepo.getAll();
  }
}
