const fruits = ["apple", "banana", "cherry"];
let i = 0;

do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);

//The do-while loop is particularly useful when you need to process elements in an array at least once, even if the array is empty.
