/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let start = 0,
    localLen = 0,
    maxLen = 0;

  for (let i = 0; i < s.length; i += 1) {
    let ch = s[i];
    if (map.get(ch) >= start) start = map.get(ch) + 1;
    map.set(ch, i);
    localLen = i - start + 1;
    maxLen = Math.max(maxLen, localLen);
  }
  return maxLen;
};
