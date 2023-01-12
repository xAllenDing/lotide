const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values
// Otherwise you get back false
const eqObjects = function (object1, object2) {
  let firstArrObj = Object.keys(object1);
  let secondArrObj = Object.keys(object2);
  if (firstArrObj.length === secondArrObj.length) {
    for (let keys of firstArrObj) {
      if(Array.isArray(object1[keys]) || Array.isArray(object2[keys])){
        if(!eqArrays(object1[keys], object2[keys])){
          return false;
        }
      }
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

let eqArrays = function (arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false