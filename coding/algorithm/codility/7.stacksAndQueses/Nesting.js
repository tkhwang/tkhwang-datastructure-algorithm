// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// 100 %
function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const stack = [];
  for (const value of S) {
    if (value === "(") stack.push(value);
    else if (value === ")") {
      const temp = stack.pop();
      if (temp !== "(") return 0;
    }
  }
  return stack.length === 0 ? 1 : 0;
}
