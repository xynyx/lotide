const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it('Should be true (["1", "2", "3"], ["1", "2", "3"])', () => {
    assert.isTrue(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
  });
  it('Should be false (["1", "2", "3"], ["1", "2", 3])', () => {
    
  });
  it('Should be false ([1, 2, 3], [3, 2, 1])', () => {
    
  });
  it('Should be true ([1, 2, 3], [1, 2, 3])', () => {
    
  });
})





assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);