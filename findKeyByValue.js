let findKeyByValue = function(genres, show) {
  // use for...in to iterate over keys in object
  for (const key in genres) {
    if (genres[key] === show) {
      return (key);
    }
  }
};

module.exports = findKeyByValue;