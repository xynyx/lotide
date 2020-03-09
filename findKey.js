let findKey = function(object, callback) {
  // use for...in to iterate over keys in object
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;