/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) return true;
  }
  return false;
};

// Others

var containsDuplicate = function(nums) {
  return new Set(nums).size < nums.length;
};

var containsDuplicate = function(nums) {
  return nums.sort().some((a, i) => a === nums[i - 1]);
};
