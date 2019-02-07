const assert = require('assert');
const add = require('../util').add;
const sub = require('../util').subtract;

describe('Unit', function () {
  it('should check if 1 is equal is true', function () {
    assert.equal(add(2, 3), 1);
  });

  it('should check if 1 is equal is true', function () {
    assert.equal(sub(2, 3), -1);
  });
});
