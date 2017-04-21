function Wand(type, size, core) {
  this.type = type;
  this.size = size;
  this.core = core;
};

Wand.prototype.cast = function(incantation) {
  return `Casting ${incantation}!`;
}

module.exports = Wand;
