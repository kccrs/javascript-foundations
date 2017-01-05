let assert = require('chai').assert;
let Unicorn = require('../exercises/unicorn');

describe('Unicorn', () => {

  it('should be a function', () => {
    assert.isFunction(Unicorn);
  });

  it('should instantiate our good friend, Unicorn', () => {
    let unicorn = new Unicorn();
    assert.isObject(unicorn);
  });

  it('should have a name', () => {
    let unicorn = new Unicorn('Bree');
    assert.equal(unicorn.name, 'Bree');
  });

  it('should have a color', () => {
    let unicorn = new Unicorn('TayTay', 'blue');
    assert.equal(unicorn.color, 'blue');
  });

  it('should be white as default', () => {
    let unicorn = new Unicorn('Louisa');
    assert.equal(unicorn.color, 'white');
  });

  it('should refute isWhite', () => {
    let unicorn = new Unicorn('Steve', 'red');
    assert.equal(unicorn.isWhite(), false);
  });

  it('should say sparklying stuff', () => {
    let unicorn = new Unicorn('Brenna');
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
