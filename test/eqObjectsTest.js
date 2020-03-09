const _ = require('../index');
const assert = require('chai').assert;


describe("#eqObjects", () => {
  it("returns true", () => {
    assert.equal(_.eqObjects(ab, ba), true);
  });
});

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

// const abc = { a: "1", b: "2", c: "3" };

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const cd2 = { c: "1", d: ["2", 3, 4] };
