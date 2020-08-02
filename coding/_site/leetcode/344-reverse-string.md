## 344. Reverse String

https://leetcode.com/problems/reverse-string/

## My solution

#### Damn simple using `reverse()`

```typescript
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    s.reverse()
};
```

two-pinter method

```typescript
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const [ x, y ] = [ s[left], s[right]]
        s[left] = y
        s[right] = x
        left += 1
        right -= 1
    }
};
```
