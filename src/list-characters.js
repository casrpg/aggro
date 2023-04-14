const STARTING_AGGRO_SCORE = 30;
const defaultEquipment = {ac: 10, carryTwoHandWeapon: false}


class Character {
    constructor(name, equipment = defaultEquipment, state) {
        this.name = name;
        this.equipment = equipment;
        this.state = state;
    }

    aggroScore() {
        let score = STARTING_AGGRO_SCORE;
        const {ac, carryTwoHandWeapon} = this.equipment
        if(carryTwoHandWeapon) {
            score++
        }
        score = score - ac;
        return score;
    }
}

const legolas = new Character('Legolas');
const gimli = new Character('Gimli', {ac: 19, carryTwoHandWeapon: true});
const gandalf = new Character('Gandalf');
const aragorn = new Character('Aragorn', {...defaultEquipment, carryTwoHandWeapon: true});

const characters = [legolas, gimli, gandalf, aragorn];

const maxCharacterNameLength = (characterList) => {
    const maxLength = characterList.reduce((length, character) => {
        return Math.max(length, character.name.length)
    }, 0)
    return maxLength;
} 

const nameColumnLength = maxCharacterNameLength(characters)

console.log(`O   ${'Name'.padEnd(nameColumnLength, ' ')} AS`);
console.log(`----${''.padEnd(nameColumnLength, '-')}---`);
characters.forEach(function(character, index){
    const order = index + 1;
    const score = character.aggroScore();
    const name = character.name.padEnd(nameColumnLength, ' ');
    console.log(`${order} - ${name} ${score}`);
});


