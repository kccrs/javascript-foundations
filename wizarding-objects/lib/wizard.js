function Wizard(name) {
  this.name = name;
  this.pets = [];
  this.petsCount = 0;
  this.wand = null;
}

Wizard.prototype.givePet = function(pet) {
  this.pets.push(pet);
  this.petsCount += 1;
}

Wizard.prototype.petList = function() {
  let petString = '';
  
  for (let i = 0; i < this.pets.length; i++) {

    petString += `${this.pets[i].name}, `;

    let animal = this.pets[i].type.charAt(0);

    if (animal === 'a' || animal === 'e' || animal === 'i' || animal === 'o' || animal === 'u') {
      petString += `an ${this.pets[i].type}, `;
    } else {
      petString += `a ${this.pets[i].type}, `;
    }
  }
  return petString.slice(0, -2).concat('.');
}

Wizard.prototype.giveWand = function(wand) {
  this.wand = wand;
}

Wizard.prototype.castSpell = function(spell) {
  if (this.wand !== null) {
    return 'Casting ' + spell +'!';
  }
}

module.exports = Wizard;
