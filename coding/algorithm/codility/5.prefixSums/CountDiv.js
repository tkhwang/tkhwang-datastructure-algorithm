// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// 50 %
function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const result = [];
  for (let i = A; i <= B; i += 1) {
    if (i % K === 0) result.push(i);
  }
  return result.length;
}

function solution(A, B, K) {
  return Math.floor(B / K) - Math.floor((A - 1) / K);
}
