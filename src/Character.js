export const defaultEquipment = {ac: 10, carryTwoHandWeapon: false};

export class Character {
  constructor(name, equipment = defaultEquipment) {
    this.name = name;
    this.equipment = equipment;
    this.advantageStatus = null;
  }

  giveAdvantage(){
    this.advantageStatus = 'advantage';
  }

  get advantageFactor() {
    if(this.advantageStatus === 'advantage'){
      return 5/4;
    }
    return 1;
  }

  aggroScore() {
    const STARTING_AGGRO_SCORE = 30;
    let score = STARTING_AGGRO_SCORE;
    const {ac, carryTwoHandWeapon} = this.equipment;
    if(carryTwoHandWeapon) {
      score++;
    }
    score = score - ac;
    return score;
  }
}
