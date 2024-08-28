//Given the array [10, 20, 30, 40, 50], remove the second element, add a new element 25 at the second position, and then find the length of the array in javascript

let numbers = [10, 20, 30, 40, 50];

numbers.splice(1, 1);

numbers.splice(1, 0, 25);

let arrayLength = numbers.length;
console.log(numbers);
console.log(arrayLength);
