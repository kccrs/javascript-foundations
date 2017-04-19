var Candy = require('../lib/candy');
var Costume = require('../lib/costume');
var Bag = require('../lib/bag');

function TrickOrTreater(costume) {
  this.newBag = new Bag();
  this.dressedUpAs = costume.style;
  this.bag = this.newBag.candies;
  this.hasCandy = false;
  this.countCandies = 0;
}

TrickOrTreater.prototype.putCandyInBag = function(candy) {
  this.newBag.add(candy);
  this.hasCandy = true;
  this.countCandies = this.newBag.count;
}

TrickOrTreater.prototype.eat = function() {
  this.newBag.candies.splice(0, 1);
  this.countCandies = this.countCandies - 1;
}

module.exports = TrickOrTreater;
