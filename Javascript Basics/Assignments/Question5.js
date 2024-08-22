//Write a function that counts how many times a specific value appears in an array of integers.


function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
          count++;
      }}
  return count;
}
const numbers = [1, 2, 3, 4, 3, 2, 3, 5, 3];
const valueToCount = 3;
const occurrences = countOccurrences(numbers, valueToCount);
console.log(occurrences);
