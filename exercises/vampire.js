function Vampire(name, pet = 'bat', thirsty) {
  this.name = name;
  this.pet = pet;
  this.thirsty = true;
}

Vampire.prototype.drink = function() {
  return this.thirsty = false;
};

module.exports = Vampire;
