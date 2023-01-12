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

const letterPositions = function(sentence){
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === " "){
      continue;
    }
    if(results[sentence[i]]){
      let currContent = results[sentence[i]];
      currContent.push(i);
      results[sentence[i]] = currContent;
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
}

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("herro").r, [1, 2]);
assertArraysEqual(letterPositions("herro").r, [2, 3]);
console.log(letterPositions("lighthouse in the house"));