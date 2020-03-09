const _ = require('../index');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe("#countOnly", () => {
  it("returns equal", () => {
    assert.deepEqual((result1), { Fang: 2, Jason: 1 });
  });
});