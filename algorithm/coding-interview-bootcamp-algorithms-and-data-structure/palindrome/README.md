# palindrome

## #1 (javascript) Original string 과 reverse 한 String 을 비교

```javascript
function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");

  return str === reversed;
}
```

## #2 (javascript)

- [C Program to Check if a Given String is Palindrome - GeeksforGeeks](https://www.geeksforgeeks.org/c-program-check-given-string-palindrome/)

```
- 1.  Find length of str. Let length be n.
- 2.  Initialize low and high indexes as 0 and n-1 respectively.
- 3.  Do following while low index ‘l’ is smaller than high index ‘h’.
  - a) If str[l] is not same as str[h], then return false.
  - b) Increment l and decrement h, i.e., do l++ and h–.
- 4.  If we reach here, it means we didn’t find a mis
```

이를 매우 javascript 스럽게 구현.

```javascript
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
```
