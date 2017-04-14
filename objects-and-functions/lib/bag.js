var Candy = require('../lib/candy');

function Bag() {
  this.empty = true;
  this.count = 0;
  this.candies = [];
};

Bag.prototype.push = function(candy) {
  this.candies.push(candy);
  this.count += 1;
}

Bag.prototype.contains = function(type) {
  console.log(type);
  console.log(candy);
  console.log(this.candies);
  this.candies.includes(candy.type);
}

module.exports = Bag;
