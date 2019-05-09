# Chap5. Timing Our Code

```javascript
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

```javascript
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
```

## Performance measurement

```javascript
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```
