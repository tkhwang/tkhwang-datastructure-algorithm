# Day 2

## Day 2: Conditional Statements: If-Else

```javascript
function getGrade(score) {
  let grade;
  // Write your code here
  if (0 <= score && score <= 5) {
    grade = "F";
  } else if (5 < score && score <= 10) {
    grade = "E";
  } else if (10 < score && score <= 15) {
    grade = "D";
  } else if (15 < score && score <= 20) {
    grade = "C";
  } else if (20 < score && score <= 25) {
    grade = "B";
  } else if (25 < score && score <= 30) {
    grade = "A";
  }

  return grade;
}
```

## Day 2: Conditional Statements: Switch

Switch 로 구현하는 것이 문제였네... ㅋㅋ

#### My solution

```javascript
function getLetter(s) {
  let letter;
  // Write your code here
  const A = ["a", "e", "i", "o", "u"];
  const B = ["b", "c", "d", "f", "g"];
  const C = ["h", "j", "k", "l", "m"];
  const D = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  if (A.includes(s[0])) {
    letter = "A";
  } else if (B.includes(s[0])) {
    letter = "B";
  } else if (C.includes(s[0])) {
    letter = "C";
  } else if (D.includes(s[0])) {
    letter = "D";
  }

  return letter;
}
```

#### Other solution

```javascript
function getLetter(s) {
  let letter = s[0];
  // Write your code here
  switch (letter) {
    case "a":
    case "i":
    case "e":
    case "o":
    case "u":
      return "A";
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      return "B";
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      return "C";
    default:
      return "D";
  }
  return letter;
}
```

## Day 2: Loops

uniq() 한 array 를 sort 해서 두 번째 element 선택하기.

#### My solution

```javascript
function getSecondLargest(nums) {
  // Complete the function
  const nums_set = new Set(nums);
  const nums_uniq = Array.from(nums_set);

  return nums_uniq.sort((a, b) => b - a)[1];
}
```

#### Others

```javascript
function getSecondLargest(nums) {
  // Complete the function
  var sorted_array = nums.sort(function(a, b) {
    return a - b;
  });
  var unique_sorted_array = sorted_array.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });

  return unique_sorted_array[unique_sorted_array.length - 2];
}
```

## Day 3: Arrays

```javascript
```
