let findKeyByValue = function(genres, show) {
  // use for...in to iterate over keys in object
  for (const key in genres) {
    if (genres[key] === show) {
      return (key);
    }
  }
};

const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);