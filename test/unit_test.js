const assert = require('assert');
const add = require('../util').add;

describe('Unit', function () {
  it('should check if 1 is equal is true', function () {
    assert.equal(add(2, 3), 5);
  });
});
