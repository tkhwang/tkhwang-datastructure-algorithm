/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 3 !== 0) return false;
    n /= 3;
  }

  return n === 1;
};
