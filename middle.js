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

module.exports = middle;