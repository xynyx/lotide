const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

let eqArrays = function(array1, array2) {
  let trueOrFalse;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i]) ? trueOrFalse = true : trueOrFalse = false;
  }
  console.log(trueOrFalse);
  return trueOrFalse;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS