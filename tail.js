const tail = function(arr) {
  let newArray = arr.slice();
  newArray.shift();
  return newArray;
};

module.exports = tail;


