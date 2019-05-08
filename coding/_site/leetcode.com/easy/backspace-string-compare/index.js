/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  const newS = [];
  for (let i = 0; i < S.length; i += 1) {
    if (S[i] === "#") {
      newS.pop();
    } else newS.push(S[i]);
  }

  const newT = [];
  for (let i = 0; i < T.length; i += 1) {
    if (T[i] === "#") {
      newT.pop();
    } else newT.push(T[i]);
  }

  return newS.join("") === newT.join("");
};
