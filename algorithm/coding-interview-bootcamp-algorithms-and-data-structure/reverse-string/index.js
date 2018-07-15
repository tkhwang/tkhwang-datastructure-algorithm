/*
function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
*/

function reverse(str) {
  let reversed = "";
  for (let c of str) {
    reversed = c + reversed;
  }
  return reversed;
}

/*
function reverse(str) {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}
*/

module.exports = reverse;
