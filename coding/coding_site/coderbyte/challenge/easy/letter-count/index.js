function LetterCountI(str) {

  // let output = {};
  // let lst_output = [];

  // let words = str
  //   .split(' ')
  //   .map(word => word.split(''));

  // console.log(words);

  // words.forEach(function (word) {
  //   output[word] = {};
  //   for (let i = 0; i < word.length; i++) {
  //     let c = word[i];
  //     if (output[word].hasOwnProperty(c)) {
  //       output[word][c]++;
  //     } else {
  //       output[word][c] = 1;
  //     }
  //   }
  // });

  // console.log(output);
  // lst_output = output.split('');


}

module.exports = LetterCountI;

m = "Hello apple pie";
LetterCountI(m);





















// let words = str.split(" ").map(word => word.split("").join(''));
// let output = {};
// let max = {};

// words.forEach(function (word) {
//   output[word] = {};
//   for (let ch = 0; ch < word.length; ch++) {
//     let c = word[ch];
//     if (output[word].hasOwnProperty(c)) {
//       output[word][c]++;
//     } else {
//       output[word][c] = 1;
//     }
//   }
// });

// console.log(words);
// console.log(output);

// for (let key in output) {
//   console.log('key', output[key]);
//   max = Object.keys(output[key]).reduce((a, b) => output[key][a] > output[key][b] ? a : b);
//   console.log(max);
//   return max;
// }