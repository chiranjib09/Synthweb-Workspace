//Develop a function that takes an array of integers and returns a new array containing only the even numbers from the original array.

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

