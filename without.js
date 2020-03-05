const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`😇😇😇 Assertion Passed: ${array1} === ${array2}`) : console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`)
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

let without = function (source, cut) {
  let newArray = source.slice();
  // splice() to remove part of array
  source.forEach(function (el, index) {
    for (let i = 0; i < cut.length; i++) {
      if (el === cut[i]) {
        newArray.splice(index, 1)
      }
    }
  })
  return newArray;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
    