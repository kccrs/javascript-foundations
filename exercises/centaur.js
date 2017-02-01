function Centaur(name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.crankyStatus = 0;
}

Centaur.prototype.getCranky = function() {
  this.crankyStatus++;
  if (this.crankyStatus >= 3) {
    this.cranky = true;
  }
};

Centaur.prototype.shoot = function() {
  this.getCranky();
  if (this.cranky === true) {
    return 'NO!';
  } else {
    return 'Twang!!!';
  }
};

Centaur.prototype.run = function() {
  this.getCranky();
  return 'Clop clop clop clop!!!';
};

Centaur.prototype.sleep = function() {
  if (this.standing === true) {
    return 'NO!';
  }
};

module.exports = Centaur;
