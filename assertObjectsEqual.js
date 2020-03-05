// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; 
  if (eqObjects(object1, object2)) {
    console.log(`😇😇😇 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`😡😡😡 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
};

let eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1.length !== array2.length) {
      return false;
    }
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) { 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) {
        return false;
    }
    // object1[key] = value
    // key will grab the key from object1 (a), and so using the variable key for object2 will ALSO look at the value a!
  }
  return true;
};


/* console.log(`😇😇😇 Assertion Passed: ${array1} === ${array2}`) : console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`); */

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" });
assertObjectsEqual([1, 2, 3], [1, 2, 3]);
assertObjectsEqual([1, 2, 3], [3, 2, 1]);