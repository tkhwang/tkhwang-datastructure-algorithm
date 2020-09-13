/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const output = [];
  let hash = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (hash.hasOwnProperty(nums[i])) output.push(nums[i]);
    else hash[nums[i]] = i;
  }

  return output;
};
