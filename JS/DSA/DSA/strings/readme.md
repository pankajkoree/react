# Strings

## **_JavaScript String is a sequence of characters, typically used to represent text. It is enclosed in single or double quotes and supports various methods for text manipulation._**

![strings](image.png)

### reversing the string

```js
// strings

// problem 1: reverse the string

let originalString = "reversingthestring";
let reversedString = "";

function reverseString(originalString) {
  for (let i = originalString.length - 1; i >= 0; --i) {
    reversedString += originalString[i];
  }
  return reversedString;
}

console.log(reverseString(originalString));
```
