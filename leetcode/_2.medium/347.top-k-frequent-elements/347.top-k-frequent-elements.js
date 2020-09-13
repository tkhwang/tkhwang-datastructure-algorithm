/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freq = {};
  let keys;

  // O(n)
  for (let i = 0; i < nums.length; i += 1) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }

  keys = Object.keys(freq);
  keys.sort((a, b) => freq[b] - freq[a]);
  return keys.slice(0, k);
};
