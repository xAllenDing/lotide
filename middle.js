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

let middle = function (arr) {
  // determine if arr length is even or odd into a variable
  let itsEven = arr.length % 2 === 0;
  // get middle index of the array
  let middleIndex = Math.floor(arr.length / 2);
  // if the arr is empty or less than or equal to 2, return empty array
  if (arr.length <= 2) {
    return [];
  } else if (itsEven) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
}

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);