function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !a && !b;
};

function one(a, b) {
  return (!a && b) || (!b && a);
};

function truthiness(a) {
  return !!a;
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return a % 2 !== 0;
};

function isEven(a) {
  return a % 2 === 0;
};

function isSquare(a) {
  return a >= 0 && Math.sqrt(a) % 1 === 0;
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
