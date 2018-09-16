# removeArrayValues.js

```
Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.
```

```javascript
var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ["hi", "there"]
};
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
```

## Solution

```javascript
function removeArrayValues(obj) {
  let keys = Object.keys(obj);

  keys.forEach(function(key) {
    // #1 Array check
    if (Array.isArray(obj[key])) {
      // #2 Array check
      //if ( obj[key].constructor === Array) {
      delete obj[key];
    }
  });

  return obj;
}
```
