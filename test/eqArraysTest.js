const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("Should be true (eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("Should be false (eqArrays[1, 2, 3], [3, 2, 1])", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it("Should be true (eqArrays(['1', '2', '3'], ['1', '2', '3'])", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

});