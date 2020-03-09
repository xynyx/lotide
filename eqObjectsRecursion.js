const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;