function Wizard(options) {
  this.options = options || {};
  this.name = this.options.name;
  this.bearded = this.makeABeard();
  this.isRested = true;
  this.spells = 0;
}

Wizard.prototype.makeABeard = function() {
  if (this.options.bearded === undefined) {
    return true;
  } else {
    return false;
  }
}

Wizard.prototype.incantation = function(spell) {
  return spell.toUpperCase();
}

Wizard.prototype.cast = function() {
  this.spells++
  if (this.spells < 3) {
    return 'MAGIC BULLET';
  }
  else {
    this.isRested = false;
    return 'I SHALL NOT CAST!';
  }
}

module.exports = Wizard;
