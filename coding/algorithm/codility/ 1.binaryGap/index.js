// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  const bin = N.toString(2);
  let max = 0,
    cnt = 0,
    cntOne = 0;

  for (let i = 0; i < bin.length; i += 1) {
    if (bin[i] === "0") {
      cnt += 1;
    } else {
      cntOne += 1;
      max = Math.max(max, cnt);
      if (i !== bin.length - 1) {
        cnt = 0;
      }
    }
    if (i === bin.length - 1) {
      max = Math.max(max, cnt);
    }
  }
  return cntOne > 1 ? max : 0;
}

N = 32;
m = solution(N);
console.log(m);
