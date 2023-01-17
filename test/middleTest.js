const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return [2] for [1, 2, 3]', () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual(result, [2])
  });
  it('should return [3] for [1, 2, 3, 4, 5]', () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3])
  });
  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3])
  });
  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3])
  });
  it('should return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4])
  });
});

