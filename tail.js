const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let tailArr = arr.slice(1, arr.length);
  console.log(tailArr);
  return tailArr;
};

// Test cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const oneItem = tail(["hi"]);
assertEqual(oneItem.length, 0);

const emptyArr = tail([]);
assertEqual(emptyArr.length, 0);