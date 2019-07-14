/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const hash = {};
  let size = nums.length;

  for (let i = 0; i < size; i += 1) {
    if (hash.hasOwnProperty(nums[i])) {
      nums.splice(i, 1);
      size -= 1;
      i -= 1;
    } else {
      hash[nums[i]] = i;
    }
  }
  return nums.length;
};
