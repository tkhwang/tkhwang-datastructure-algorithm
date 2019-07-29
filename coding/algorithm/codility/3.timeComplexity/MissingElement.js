// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let sum = 0,
    max = 0;

  if (A.length === 0) return 1;

  for (let i = 0; i < A.length; i += 1) {
    if (A[i] > max) max = A[i];
    sum += A[i];
  }

  return (max * (max + 1)) / 2 - sum;
}
