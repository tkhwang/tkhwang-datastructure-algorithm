// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = {};
  for (const value of A) {
    map[value] = (map[value] || 0) + 1;
  }

  const keys = Object.keys(map);
  keys.sort((a, b) => map[b] - map[a]);

  const result = [];
  const max = map[keys[0]];
  for (let i = 0; i < keys.length; i += 1) {
    if (map[keys[i]] === max) result.push(keys[i]);
  }
  return result;
}

var A = [3, 4, 3, 2, 3, -1, 3, 3];
m = solution(A);
console.log(m);
