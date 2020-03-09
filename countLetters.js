const countLetters = function(string) {
  string = string.replace(/ /g, '');
  // let is used for primitive data types that will be modified
  const results = {};
  for (const char of string) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  };
  return results;
};

const assertEqual = require('./assertEqual');
module.exports = countLetters;

assertEqual(countLetters("HELLO"), { H: 1, E: 1, L: 2, O: 1 })
console.log(countLetters("lighthouse in the house"));