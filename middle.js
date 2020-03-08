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

const assertArraysEqual = require('./assertArraysEqual');

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
