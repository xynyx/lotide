let middle = function(array) {
  let returnedArray = [];
  const mid = Math.floor(array.length / 2);
  if (array.length < 3) {
    return returnedArray;
  }
  if (array.length % 2 === 0) {
    returnedArray.push(array[mid - 1], array[mid]);
    return returnedArray;
  }
  returnedArray.push(array[mid]);
  return returnedArray;
};

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

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
