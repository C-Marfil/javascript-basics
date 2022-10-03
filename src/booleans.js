function negate(a) {
  return !a;
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

function either(a, b) {
  if (a === true || b === true) {
    return true;
  }
  return false;
}

function none(a, b) {
  if (a === false && b === false) {
    return true;
  }
  return false;
}

function one(a, b) {
  if (a === true && b === false) {
    return true;
  }
  if (a === false && b === true) {
    return true;
  }
  return false;
}

function truthiness(a) {
  if (a === 0 || a === '' || Number.isNaN(a) || a === undefined || a === null) {
    return false;
  }
  return true;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  // your code here
};

function isEven(a) {
  // your code here
};

function isSquare(a) {
  // your code here
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
