# Day1

## Day 1: Arithmetic Operators

```javascript
/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
  let area;
  area = length * width;

  return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);

  return perimeter;
}
```

## Day 1: Functions

```javascript
/*
* Create the function factorial here
*/
function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}
```

## Day 1: Let and Const

```javascript
function main() {
// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
const PI =  Math.PI;
const diameter = readLine();

// Print the area of the circle:
console.log(PI * diameter * diameter);

// Print the perimeter of the circle:
console.log(2 * PI * diameter);
```
