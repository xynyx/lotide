const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = require('./assertArraysEqual');

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + "y");
const results3 = map(words, word => word + "1");

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["groundy", "controly", "toy", "majory", "tomy"]);
assertArraysEqual(results3, ["ground1", "control1", "to1", "major1", "tom1"]);



