let without = function (source, cut) {
  let newArray = source.slice();
  // splice() to remove part of array
  source.forEach(function (el, index) {
    for (let i = 0; i < cut.length; i++) {
      if (el === cut[i]) {
        newArray.splice(index, 1)
      }
    }
  })
  return newArray;
};

module.exports = without;