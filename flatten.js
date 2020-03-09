let flatten = function(array) {
  return array.reduce(function(acc, curr) {
    if (Array.isArray(curr)) {
      let values = [];
      for (let i = 0; i < curr.length; i++) {
        values.push(curr[i])
      }
      return acc.concat(values);
    }
    return acc.concat([curr])
  }, []);
};

module.exports = flatten;