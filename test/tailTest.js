const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return 3 for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2)
  });
  it('should return 0 for ["Hello"]', () => {
    const result = tail(["Hello"]);
    assert.strictEqual(result.length, 0)
  });
});