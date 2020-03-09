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

module.exports = countLetters;