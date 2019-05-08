// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const internalFizzBuzz = n => {
    let m;
    if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
    else if (n % 3 === 0) return "fizz";
    else if (n % 5 === 0) return "buzz";
    else return n;
  };

  let idx = 1;
  while (idx <= n) {
    console.log(internalFizzBuzz(idx));
    idx += 1;
  }
}

module.exports = fizzBuzz;
