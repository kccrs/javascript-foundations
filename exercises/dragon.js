function Dragon(name, rider, color, hungry) {
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.hungry = true;
  this.meals = 0;
}

Dragon.prototype.eat = function() {
  if (this.meals < 3) {
    this.meals++;
  }
  if (this.meals === 3){
    this.hungry = false;
  }
}

module.exports = Dragon;
