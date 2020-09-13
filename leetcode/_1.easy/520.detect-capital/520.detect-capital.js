/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let isAllCapital = false,
    isAllLower = false,
    isNormal = false;

  if ("A" <= word[0] && word[0] <= "Z") {
    if ("a" <= word[1] && word[1] <= "z") isNormal = true;
    else isAllCapital = true;
  } else isAllLower = true;

  for (let i = 1; i < word.length; i += 1) {
    if (isAllCapital) {
      if ("a" <= word[i] && word[i] <= "z") return false;
    } else if (isAllLower || isNormal) {
      if ("A" <= word[i] && word[i] <= "Z") return false;
    }
  }

  return true;
};

// Best
var detectCapitalUse = function(word) {
  return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};
