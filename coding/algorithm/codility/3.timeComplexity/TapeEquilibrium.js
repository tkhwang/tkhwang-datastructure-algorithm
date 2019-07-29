// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let left = 0,
    right = 0,
    min = Infinity,
    result = 0,
    index = -1;

  for (let i = 1; i <= A.length - 1; i += 1) {
    for (let j = 0; j < i; j += 1) {
      left += A[j];
    }
    for (let j = i; j < A.length; j += 1) {
      right += A[j];
    }
    result = Math.abs(left - right);
    console.log(i, left, right, result);

    if (min > result) {
      index = i;
      min = result;
    }
    left = 0;
    right = 0;
  }
  return min;
}
