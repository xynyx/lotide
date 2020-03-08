let eqArraysRecursion = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    // Check length first, because if they are not the same length, return false immediately
    if (array1[i].length !== array2[i].length) {
      return false;
    }
    if (Array.isArray(array1[i])) {
      // CRITICAL
      // Since the result of eqArrays() is a boolean (true/false), you can use as a condition in an if statement
      // If eqArrays is FALSE (eg. !TRUE)
      // If you do return eqArrays() and they happen to be the same, it will return true without checking rest of array (BAD)
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqArrays = require('./eqArrays');

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));

eqArraysRecursion([[2, 3], [4]], [[2, 3], [4]]); // => true

// eqArrays([[2, 3], [4]] // [[2, 3], [4]])

eqArraysRecursion([[2, 3], [4]], [[2, 3], [4, 5]]); // => false

// console.log(eqArrays([[2, 3], [4]],  // [[2, 3], [4, 5]])) // => false

// eqArraysRecursion([[2, 3], [4]], [[2, 3], 4]); // => false