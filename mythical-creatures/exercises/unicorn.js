function Unicorn(name, color = 'white') {
  this.name = name;
  this.color = color;
}

Unicorn.prototype.isWhite = function() {

  return this.color === 'white';

  // if (this.color === 'white') {
  //   return true;
  // } else {
  //   return false;
  // }
};

Unicorn.prototype.says = function(words) {
  return '**;* ' + words + ' *;**';
};

module.exports = Unicorn;
