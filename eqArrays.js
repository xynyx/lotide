const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
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

module.exports = eqArrays;

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS