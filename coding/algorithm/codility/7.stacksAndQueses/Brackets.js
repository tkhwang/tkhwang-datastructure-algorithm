// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// 100 %
function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const paren = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  const stack = [];

  for (const value of S) {
    if (Object.values(paren).includes(value)) {
      stack.push(value);
    } else if (Object.keys(paren).includes(value)) {
      const temp = stack.pop();
      if (temp !== paren[value]) return 0;
    }
  }
  return stack.length === 0 ? 1 : 0;
}
