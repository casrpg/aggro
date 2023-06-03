export const defaultEquipment = {ac: 10, carryTwoHandWeapon: false};

const ADVANTAGE = 'advantage';
const DISADVANTAGE = 'disAdvantage';
const NOR_ADVANTAGE_NOR_DISADVANTAGE = 'none';

export class Character {
  constructor(name, equipment = defaultEquipment) {
    this.name = name;
    this.equipment = equipment;
    this.advantageStatus = NOR_ADVANTAGE_NOR_DISADVANTAGE;
  }

  giveAdvantage(){
    this.advantageStatus = ADVANTAGE;
  }

  giveDisAdvantage(){
    this.advantageStatus = DISADVANTAGE;
  }

  resetAdvantage(){
    this.advantageStatus = NOR_ADVANTAGE_NOR_DISADVANTAGE;
  }

  get advantageFactor() {
    if(this.advantageStatus === ADVANTAGE){
      return 5/4;
    }

    if (this.advantageStatus === DISADVANTAGE){
      return 3/4;
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
