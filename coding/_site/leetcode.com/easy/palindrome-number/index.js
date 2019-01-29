var isPalindrome = function (x) {
  return ('' + x) === ('' + x).split('').reverse().join('')

};

module.exports = isPalindrome;