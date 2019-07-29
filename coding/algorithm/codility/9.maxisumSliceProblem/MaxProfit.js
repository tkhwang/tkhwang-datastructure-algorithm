// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxSofar = 0,
    minPrice = A[0],
    maxEndingHere = 0;

  for (let i = 1; i < A.length; i += 1) {
    maxEndingHere = Math.max(0, A[i] - minPrice);
    minPrice = Math.min(minPrice, A[i]);
    maxSofar = Math.max(maxEndingHere, maxSofar);
  }

  return maxSofar;
}
