/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
  const sanitizedS = s
    .toLowerCase()
    .split("")
    .filter(ch => alpha.includes(ch))
    .join("");

  console.log("TCL: isPalindrome -> sanitizedS", sanitizedS);

  if (sanitizedS.length === 1) return true;

  for (let i = 0; i < sanitizedS.length; i += 1) {
    if (sanitizedS[i] !== sanitizedS[sanitizedS.length - 1 - i]) return false;
  }
  return true;
};
