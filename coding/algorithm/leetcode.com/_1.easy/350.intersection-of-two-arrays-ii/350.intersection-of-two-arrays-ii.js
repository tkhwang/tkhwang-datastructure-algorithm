/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const freq = {};
  const output = [];

  for (const num of nums1) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const num of nums2) {
    if (freq.hasOwnProperty(num) && freq[num] > 0) {
      freq[num] -= 1;
      output.push(num);
    }
  }

  return output;
};
