// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// 44 %
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let max = -Infinity;

  for (let i = 0; i < A.length; i += 1) {
    for (let j = i + 1; j < A.length; j += 1) {
      for (let k = j + 1; k < A.length; k += 1) {
        max = Math.max(max, A[i] * A[j] * A[k]);
      }
    }
  }
  return max;
}

// 100 %
function solution(A) {
  const arr = A.sort((a, b) => a - b);
  const len = arr.length;
  return Math.max(A[len - 1] * A[len - 2] * A[len - 3], A[0] * A[1] * A[len - 1]);
}
