function Vampire(name, pet = 'bat') {
  this.name = name;
  this.pet = pet;
  this.thirsty = true;
}

Vampire.prototype.drink = function() {
  // return is optional
  return this.thirsty = false;
};

module.exports = Vampire;
