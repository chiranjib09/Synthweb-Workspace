//Write a function that calculates and returns the average of all elements in an array of integers.

function calculateAverage(arr){
  const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average);