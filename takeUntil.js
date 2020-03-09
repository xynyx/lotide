const takeUntil = function(array, callback) {
  let newArray = [];
  array.forEach(function(el, index) {
    if (callback(el)) {
      newArray = array.slice(0, index);
    }
  })
  return newArray;
};

const assertArraysEqual = require('./assertArraysEqual');
module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
