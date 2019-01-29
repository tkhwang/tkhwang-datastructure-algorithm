# Day 3

## Day 3 : Arrays

[Day 3: Arrays | HackerRank](https://www.hackerrank.com/challenges/js10-arrays/problem)

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

Max 를 구한 후 filter() 하여 largest 를 제거한 이후에 max 를 구하기.

```javascript
Array.prototype.maxSecondNumber = function() {
  const maxValue = Math.max.apply(null, this);
  const filteredMaxValue = this.filter(item => item !== maxValue);
  return Math.max.apply(null, filteredMaxValue);
};

function getSecondLargest(nums) {
  // Complete the function
  return nums.maxSecondNumber();
}
```

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
