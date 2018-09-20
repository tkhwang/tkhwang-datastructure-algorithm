function LetterCountI(str) {

  // str = "Hello apple pie";
  /*
  output  =  { 
    Hello : {
      H : 1,
      e : 1,
      l : 2,
      o : 1,
    }, apple : {
    
    }, pie : {
      
    }
  }
  */

  let output = {};

  let words = m.split(' ');
  words.forEach(function (word) {
    output[word] = {};
    let chs = word.split('');
    chs.forEach(function (ch) {
      if (output[word].hasOwnProperty(ch)) {
        output[word][ch]++;
      } else {
        output[word][ch] = 1;
      }
    });
  });

  // Sort by character
  let key = Object.keys(output);
  key.sort((a, b) => output[b] - output[a]);

  console.log(output);
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