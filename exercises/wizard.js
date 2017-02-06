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
  if (this.spells > 3){
    this.isRested = false;
    console.log('so tired!');
    return 'I SHALL NOT CAST!';
  }
   else {
    this.spells++
    console.log(this.spells);
    return 'MAGIC BULLET';
  }

}

module.exports = Wizard;
