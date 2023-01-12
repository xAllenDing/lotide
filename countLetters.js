const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const results = {};
  for (const letters of sentence) {
    if (letters === " ") {
      continue;
    }
    // checks if the key has been made
    if (results[letters]) {
      results[letters] = ++results[letters];
    } else {
      //creates the key for the letter and gives it a value of 1
      results[letters] = 1;
    }
  }
  return results;
}

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), ("lighthouse in the house"));