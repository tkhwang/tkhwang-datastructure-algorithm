# removeNumberValues.js

```
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.
```

```javascript
var obj = {
  a: 2,
  b: "remaining",
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
```

## Solution

```javascript
function removeNumberValues(obj) {
  // your code here
  let keys = Object.keys(obj);

  function isNumeric(n) {
    // #1 Simple check
    return !isNaN(n);
    // #2 Perfect check
    //return !isNaN(parseFloat(n)) && isFinite(n);
  }

  keys.forEach(function(key) {
    if (isNumeric(obj[key])) {
      delete obj[key];
    }
  });

  return obj;
}
```
