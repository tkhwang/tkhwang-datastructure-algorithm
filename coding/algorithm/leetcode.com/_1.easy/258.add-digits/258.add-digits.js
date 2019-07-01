/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let strNum = String(num).split("");
  let sum;
  while (strNum.length > 1) {
    sum = strNum.reduce((auc, cur) => auc + cur);
    strNum = String(sum).split("");
  }
  return strNum;
};

// Others
var addDigits = function(num) {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
};
