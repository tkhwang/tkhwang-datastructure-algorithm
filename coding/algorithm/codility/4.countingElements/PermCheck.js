// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 0) return 0;

  const max = Math.max(...A);
  let sum = A.reduce((a, b) => a + b, 0);

  return (max * (max + 1)) / 2 === sum ? 1 : 0;
}
