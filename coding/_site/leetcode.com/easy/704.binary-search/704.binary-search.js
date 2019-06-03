/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  const binarySearch = (arr, left, right, target) => {
    if (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (arr[mid] === target) return mid;
      if (arr[mid] > target) return binarySearch(nums, left, mid - 1, target);
      if (arr[mid] < target) return binarySearch(nums, mid + 1, right, target);
    }

    return -1;
  };

  return binarySearch(nums, 0, right, target);
};

// Learn Search
/*
var search = function(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) return i;
  }
  return -1;
};
*/
