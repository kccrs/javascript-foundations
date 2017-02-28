function Centaur(name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.crankyStatus = 0;
  this.rested = false;
}

Centaur.prototype.getCranky = function() {
  this.crankyStatus++;
  if (this.crankyStatus >= 3) {
    this.cranky = true;
  }
};

Centaur.prototype.shoot = function() {
  this.getCranky();
  if (this.cranky || this.layingDown) {
    return 'NO!';
  } else {
    return 'Twang!!!';
  }
};

Centaur.prototype.run = function() {
  this.getCranky();
  if (this.layingDown) {
    return 'NO!';
  } else {
    return 'Clop clop clop clop!!!';
  }
};

Centaur.prototype.sleep = function() {
  if (this.standing) {
    return 'NO!';
  } else {
    // this.rested = true;
    this.cranky = false;
    this.crankyStatus = 0;
    return 'ZZZZ';
  }
};

Centaur.prototype.layDown = function() {
  this.standing = false;
  this.layingDown = true;
};

Centaur.prototype.standUp = function() {
  this.standing = true;
  this.layingDown = false;
};

Centaur.prototype.drinkPotion = function() {
  if (this.standing === false) {
    return 'Not while I\'m laying down!';
  }
  if (this.crankyStatus === 0) {
    this.cranky = true;
  }
  else {
    this.cranky = false;
    this.crankyStatus = 0;
  }
}

module.exports = Centaur;
