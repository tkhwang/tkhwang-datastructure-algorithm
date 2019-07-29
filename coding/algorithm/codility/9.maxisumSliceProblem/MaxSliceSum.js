// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxEndingHere = A[0],
    maxSofar = A[0];

  for (let i = 1; i < A.length; i += 1) {
    maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
    maxSofar = Math.max(maxSofar, maxEndingHere);
  }
  return maxSofar;
}
