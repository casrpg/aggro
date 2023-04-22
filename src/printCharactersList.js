export const printCharacterList = (characterList) => {
  const maxCharacterNameLength = (characterList) => {
    const maxLength = characterList.reduce((length, character) => {
        return Math.max(length, character.name.length)
    }, 0)
    return maxLength;
}

const nameColumnLength = maxCharacterNameLength(characterList)

console.log(`O   ${'Name'.padEnd(nameColumnLength, ' ')} AS  Adv.  Dis.  End.  Deb.  Adv.+End.  Adv.+Dev.  Dis.+End.  Dis.+Deb.`);
console.log(`----${''.padEnd(nameColumnLength, '-')}-------------------------------------------------------------------------`);
characterList.forEach(function(character, index){
    const virtualAggroConstants = {advantage: 5/4, disadvantage: 3/4, endurance: 1/2, debility: 2}
    const order = index + 1;
    const score = character.aggroScore();
    const advantage = Math.ceil(score * virtualAggroConstants.advantage);
    const disadvantage = Math.ceil(score * virtualAggroConstants.disadvantage);
    const endurance = Math.ceil(score * virtualAggroConstants.endurance);
    const debility = Math.ceil(score * virtualAggroConstants.debility);
    const advPlusEnd = Math.ceil(advantage * virtualAggroConstants.endurance);
    const advPlusDeb = Math.ceil(advantage * virtualAggroConstants.debility);
    const disPlusEnd = Math.ceil(disadvantage * virtualAggroConstants.endurance);
    const disPlusDeb = Math.ceil(disadvantage * virtualAggroConstants.debility);
    const name = character.name.padEnd(nameColumnLength, ' ');
    console.log(`${order} - ${name} ${score}  ${advantage}    ${disadvantage}    ${endurance}     ${debility}    ${advPlusEnd}          ${advPlusDeb}         ${disPlusEnd}         ${disPlusDeb}`);
});
}
