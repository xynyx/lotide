const assertArraysEqual = function(array1, array2) {
  let trueOrFalse;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i]) ? trueOrFalse = true : trueOrFalse = false;
  }
  trueOrFalse ? console.log(`😇😇😇 Assertion Passed: ${array1} === ${array2}`) : console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);