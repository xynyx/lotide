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

module.exports = middle;