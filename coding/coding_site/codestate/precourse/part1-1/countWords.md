# countWords.js

```
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string.

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
```

## My solution

```javascript
function countWords(str) {
  let output = {};
  let words = str.split(" ");

  if (!str) return {};

  words.forEach(function(word) {
    if (word in output) {
      output[word]++;
    } else {
      output[word] = 1;
    }
  });

  return output;
}
```
