const _ = require('../index');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it("returns equal", () => {
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);