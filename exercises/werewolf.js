function Werewolf(name, location) {
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
}

Werewolf.prototype.change = function() {
  this.human = !this.human;
  this.wolf = !this.wolf;
  this.hungry = this.wolf;
}

Werewolf.prototype.eat = function(victim) {
  if (this.hungry) {
    victim.alive = false;
    return 'YUM!';
  } else {
    return 'Ew! No way!';
  }
  this.change();
}

function Victim(name) {
  this.name = name;
  this.alive = true;
}

module.exports = { Werewolf, Victim };
