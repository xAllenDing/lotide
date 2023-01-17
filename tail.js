const tail = function(arr) {
  let tailArr = arr.slice(1, arr.length);
  console.log(tailArr);
  return tailArr;
};

module.exports = tail;