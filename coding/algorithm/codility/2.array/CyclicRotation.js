// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  while (K > 0) {
    let temp = A.pop();
    A.unshift(temp);
    K -= 1;
  }
  return A;
}
