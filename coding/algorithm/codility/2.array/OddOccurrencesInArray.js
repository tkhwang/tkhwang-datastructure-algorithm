// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const hash = {};
  for (const value of A) {
    hash[value] = (hash[value] || 0) + 1;
  }

  const m = Object.keys(hash)
    .map(value => Number(value))
    .filter(value => hash[value] % 2 !== 0);

  return m[0];
}

n = [9, 3, 9, 3, 9, 7, 9];
t = solution(n);
console.log(t);
