const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return true middle[1, 2, 3, 4, 5]) =  [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("return true middle[1, 2, 3, 4, 5, 6]) =  [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("return false middle[1, 2, 3, 4, 5, 6]) =  [3, 5]", () => {
    assert.notDeepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5]);
  });
});