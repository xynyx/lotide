const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const tail = require('../tail');

describe("#tail", () => {
  it("returns true (tail of [1, 2, 3] = [2, 3])", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns true (tail of [5] = [])", () => {
    assert.deepEqual(tail([5]), []);
  });
  it("returns true (tail of ['hi', 'there'] = ['there'])", () => {
    assert.deepEqual(tail(["hi", "there"]), ["there"]);
  });
  it("returns false (tail of ['hi', 'there', 'bub'] !== ['bub'])", () => {
    assert.notDeepEqual(tail(["hi", "there", "bub"]), ["bub"]);
  });
});