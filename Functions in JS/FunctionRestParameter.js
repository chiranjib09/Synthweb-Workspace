//Rest parameters allow a function to accept an indefinite number of arguments as an array.


function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
const total = sum(1, 2, 3, 4, 5);

console.log(total);
