/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const parens = {
    "}": "{",
    ")": "(",
    "]": "["
  };

  for (let ch of s) {
    if (Object.values(parens).includes(ch)) stack.push(ch);
    else if (Object.keys(parens).includes(ch)) {
      const top = stack.pop();
      if (top !== parens[ch]) return false;
    }
  }
  console.log(stack);
  return stack.length === 0;
};

const m = "()";
const n = isValid(m);
console.log("TCL: n", n);
