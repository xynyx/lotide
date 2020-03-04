const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

let countLetters = function(string) {
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

console.log(countLetters("HELLO"))
console.log(countLetters("lighthouse in the house"));