let findKey = function(object, callback) {
  // use for...in to iterate over keys in object
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const assertEqual = require('./assertEqual');

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, "noma");