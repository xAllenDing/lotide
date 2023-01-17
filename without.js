let eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

let assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⚠️⚠️ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

let without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])){
      newArr.push(source[i]);
    }
  }
  return newArr;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, "apples", 3, 4], ["apples"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(without(["1", "2", "3"], ["3"]));

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual([1, 2, "apples", 3, 4], [1, 2, "apples", 3, 4]);

module.exports = without;