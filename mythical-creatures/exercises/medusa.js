function Medusa(name) {
  this.name = name;
  this.statues = [];
}

Medusa.prototype.stare = function(person) {
  this.statues.push(person);
  person.stoned = true;

  if (this.statues.length > 3) {
    this.statues.shift().stoned = false;
  }
}

function Person(name) {
  this.name = name;
  this.stoned = false;
}

module.exports = { Medusa, Person };
