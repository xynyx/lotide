const assertEqual = function(actual, expected) {
  if (Array.isArray(actual)) {
    actual = actual.toString();
  }
  if (Array.isArray(expected)) {
    expected = expected.toString();
  }
  (actual === expected) ? console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, "2");

const tail = function(arr) {
  let newArray = arr;
  newArray.shift();
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);