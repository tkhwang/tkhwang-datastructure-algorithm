// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let distance = X;
  let count = 0;

  while (distance < Y) {
    distance += D;
    count += 1;
  }

  return count;
}

// 100 %
function solution(X, Y, D) {
  let distance = Y - X;
  return Math.ceil(distance / D);
}
