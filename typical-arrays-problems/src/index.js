
exports.min = function min (array) {
  if (array && array.length > 0 && Array.isArray(array)) {
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }
    array.sort(compareNumeric);
    return array[0];
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array && array.length > 0 && Array.isArray(array)) {
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }
    array.sort(compareNumeric);
    return array.slice(-1);
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array && array.length > 0 && Array.isArray(array)) {
    let avgValue = (array.reduce((sum, current) => sum + current))/array.length
    return avgValue;
  } else {
    return 0;
  }
}
