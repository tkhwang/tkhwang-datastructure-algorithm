/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const larger = nums1.length > nums2.length ? nums1 : nums2;
  const smaller = nums1.length > nums2.length ? nums2 : nums1;
  const common = [];

  for (let i = 0; i < larger.length; i += 1) {
    if (smaller.includes(larger[i])) common.push(larger[i]);
  }
  return Array.from(new Set(common));
};
