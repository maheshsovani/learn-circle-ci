const assert = require('assert');
const add = require('../util').add;

describe('Integration', function () {
  it('should check if 1 is equal is true', function (done) {
    setTimeout(() => {
      assert.equal(add(2, 3), 5);
      done();
    }, 1500);
  });
});
