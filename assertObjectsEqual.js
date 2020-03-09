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