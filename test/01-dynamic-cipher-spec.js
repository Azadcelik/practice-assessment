const assert = require("assert");
const dynamicCipher = require("../problems/01-dynamic-cipher.js");

describe("dynamicCipher()", function() {
  it("should return a function", function() {
    assert.equal(dynamicCipher(3) instanceof Function, true)
  });

  it("should offset to the right with positive numbers", function() {

    const word1 = "cattail";
    const rotateRightTwo = dynamicCipher(2);
    assert.deepStrictEqual(rotateRightTwo(word1), "ecvvckn");
  });

  it("should offset to the left with negative numbers", function() {

    const word2 = "egg";
    const rotateLeftTwo = dynamicCipher(-2);
    assert.deepStrictEqual(rotateLeftTwo(word2), "cee");
  });
});
