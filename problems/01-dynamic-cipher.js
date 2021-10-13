/***********************************************************************
Write a function named `dynamicCipher(offset)`. When invoked, the
`dynamicCipher` function will accept a number to be used as the
offset and return a function. Positive numbers offset each character in a word
to the right and negative numbers offset each character in a word to the left.

The function returned by `dynamicCipher` will accept a string in which each
character of the string will be offset by the amount provided when
`dynamicCipher` was first invoked. It will return a new string which represents
the original string encoded by the offset.

Examples:

```js
let word1 = "cattail";
rotateRightTwo = dynamicCipher(2);
rotateRightTwo(word1);
console.log(rotateRightTwo(word1)); // "ecvvckn"
// the output "ecvvckn" represents eeach character in the input string offset by two indexes to the RIGHT in the alphabet

let word2 = "egg";
rotateLeftTwo = dynamicCipher(-2);
rotateLeftTwo(word2);
console.log(rotateLeftTwo(word2)); // "cee"
// the output "cee" represents eeach character in the input string offset by two indexes to the LEFT in the alphabet
```
***********************************************************************/

function dynamicCipher(offset) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Your code here
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicCipher;
} catch {
  module.exports = null;
}