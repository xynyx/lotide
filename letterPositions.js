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



const assertArraysEqual = function(array1, array2) {
  let trueOrFalse;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i]) ? trueOrFalse = true : trueOrFalse = false;
  }
  trueOrFalse ? console.log(`😇😇😇 Assertion Passed: ${array1} === ${array2}`) : console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
};

let eqArrays = function(array1, array2) {
  let trueOrFalse;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i]) ? trueOrFalse = true : trueOrFalse = false;
  }
  console.log(trueOrFalse);
  return trueOrFalse;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);