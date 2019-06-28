/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const isAlpha = ch => {
    if (("a" <= ch && ch <= "z") || ("A" <= ch && ch <= "Z")) return true;
    else return false;
  };

  const backtrack = (array, result, index) => {
    if (index === array.length) {
      result.push(array.join(""));
    } else {
      let ch = array[index];
      if (isAlpha(ch)) {
        array[index] = ch.toLowerCase();
        backtrack(array, result, index + 1);
        array[index] = ch.toUpperCase();
        backtrack(array, result, index + 1);
      } else {
        backtrack(array, result, index + 1);
      }
    }
  };

  const array = S.split("");
  const result = [];

  backtrack(array, result, 0);
  return result;
};
