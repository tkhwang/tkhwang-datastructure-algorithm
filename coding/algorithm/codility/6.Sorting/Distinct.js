// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// 100 %
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = {};
  for (const value of A) {
    map[value] = true;
  }
  return Object.keys(map).length;
}
