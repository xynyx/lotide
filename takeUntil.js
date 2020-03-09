const takeUntil = function(array, callback) {
  let newArray = [];
  array.forEach(function(el, index) {
    if (callback(el)) {
      newArray = array.slice(0, index);
    }
  })
  return newArray;
};

module.exports = takeUntil;