const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  for (let key in obj) {
    let keyValue = obj[key];
    if (keyValue === value) {
      return key;
    } 
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "woof"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "woof");
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 1);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 1);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);4

module.exports = findKeyByValue;