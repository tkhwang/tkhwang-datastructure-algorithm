# extend.js

```
Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.

Notes:
* Add any keys that are not in the 1st object.
* If the 1st object already has a given key, ignore it (do not overwrite the property value).
* Do not modify the 2nd object at all.
```

## My solution

```javascript
function extend(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  keys2.forEach(function(key2) {
    if (!(key2 in obj1)) {
      obj1[key2] = obj2[key2];
    }
  });

  return obj1;
}
```
