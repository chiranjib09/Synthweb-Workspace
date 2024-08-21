// Write a function that reverses the elements of an array in place (i.e., without using a second array).

function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
  }
  return arr;
}
const numbers = [1, 2, 3, 4, 5];
reverseArrayInPlace(numbers);
console.log(numbers);
