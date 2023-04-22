export const defaultEquipment = {ac: 10, carryTwoHandWeapon: false};

export class Character {
  constructor(name, equipment = defaultEquipment, state) {
    this.name = name;
    this.equipment = equipment;
    this.state = state;
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
