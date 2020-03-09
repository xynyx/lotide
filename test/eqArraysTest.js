const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

console.log("Should be true");
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log("Should be false");
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log("Should be true");
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log("Should be false");
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS