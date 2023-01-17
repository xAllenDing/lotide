const eqObjects = function (object1, object2) {
  let firstArrObj = Object.keys(object1);
  let secondArrObj = Object.keys(object2);
  if (firstArrObj.length === secondArrObj.length) {
    for (let keys of firstArrObj) {
      if (Array.isArray(object1[keys]) || Array.isArray(object2[keys])) {
        if (!eqArrays(object1[keys], object2[keys])) {
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

const assertObjectEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⚠️⚠️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let obj1 ={time: "now"};
let obj2 = {time: "now"};
let obj3 = {time: "never"};
assertObjectEqual(obj1, obj2);
assertObjectEqual(obj1, obj3);

module.exports = assertObjectEqual;