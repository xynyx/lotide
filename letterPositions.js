const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (const letter of sentence) {
    if (!results[letter]) {
      results[letter] = [];
      results[letter].push(index);
    } else {
      results[letter].push(index);
    }
    index++;
  }
  delete results[" "];
  return results;
};

const assertArraysEqual = require('./assertArraysEqual');
module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);