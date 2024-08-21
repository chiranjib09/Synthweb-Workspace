//Create a function that finds and returns the maximum value in an array of integers.

function findMax(arr) {
  return Math.max(...arr);
}
const numbers = [3, 7, 2, 9, 5];
const max = findMax(numbers);
console.log(max);
