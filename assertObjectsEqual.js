// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; 
  if (eqObjects(object1, object2)) {
    console.log(`😇😇😇 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`😡😡😡 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
};

const eqObjects = require('./eqObjects');
module.exports = assertObjectsEqual;


assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" });