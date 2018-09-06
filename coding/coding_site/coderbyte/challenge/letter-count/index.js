function LetterCountI(str) {
  let chs = str.split(" ").map(word => word.split(""));
  let output = {};

  chs.forEach(function(el) {
    console.log(el);
    if (el in output) {
      output[el]++;
    } else {
      output[el] = 1;
    }
  });

  // console.log(chs);
  // console.log(output);
}

module.exports = LetterCountI;

m = "Hello apple pie";
LetterCountI(m);
