/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let perm = [];
  let perms = [];
  const _permute = (array, perm, perms) => {
    if (!array.length) perms.push(perm);
    else {
      for (let i = 0; i < array.length; i += 1) {
        let newArray = array.slice(0, i).concat(array.slice(i + 1));
        let newPerm = perm.concat(array[i]);
        _permute(newArray, newPerm, perms);
      }
    }
  };
  _permute(nums, perm, perms);
  return perms;
};
