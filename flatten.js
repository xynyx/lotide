const assertArraysEqual = function(array1, array2) {
  let trueOrFalse;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i]) ? trueOrFalse = true : trueOrFalse = false;
  }
  trueOrFalse ? console.log(`😇😇😇 Assertion Passed: ${array1} === ${array2}`) : console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
};

let eqArrays = function(array1, array2) {
  let trueOrFalse;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i]) ? trueOrFalse = true : trueOrFalse = false;
  }
  console.log(trueOrFalse);
  return trueOrFalse;
};

let flatten = function(array) {
  return array.reduce(function(acc, curr) {
    if (Array.isArray(curr)) {
      let values = [];
      for (let i = 0; i < curr.length; i++) {
        values.push(curr[i])
      }
      return acc.concat(values);
    }
    return acc.concat([curr])
  }, []);
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]