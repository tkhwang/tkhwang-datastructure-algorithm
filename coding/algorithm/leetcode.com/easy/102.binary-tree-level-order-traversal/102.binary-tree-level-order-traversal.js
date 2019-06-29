/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];

  let queue = [root];
  let result = [];

  while (queue.length !== 0) {
    let current = [];
    let size = queue.length;
    for (let i = 0; i < size; i += 1) {
      let node = queue.shift();
      current.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(current);
  }
  return result;
};
