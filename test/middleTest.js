const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test cases
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
