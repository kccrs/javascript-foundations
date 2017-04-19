// var Candy = require('../lib/candy');

function Bag() {
  this.empty = true;
  this.count = 0;
  this.candies = [];
};

Bag.prototype.add = function(candy) {
  this.candies.push(candy);
  this.count += 1;
  this.empty = false;
}

Bag.prototype.contains = function(type) {
  let val = this.candies.filter(function (candy) {
    return candy['type'] === type;
  });
  return val.length > 0;
}

module.exports = Bag;
