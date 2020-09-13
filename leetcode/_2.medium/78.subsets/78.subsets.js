/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const powersets = [[]];
  for (const num of nums) {
    const length = powersets.length;
    for (let i = 0; i < length; i += 1) {
      powersets.push(powersets[i].concat(num));
    }
  }
  return powersets;
};
