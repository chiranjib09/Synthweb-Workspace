//Write a function that takes an array of integers as input and returns the sum of all its elements.

function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //to sum up all the elements of an array
}
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum);