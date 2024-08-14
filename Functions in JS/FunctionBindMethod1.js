//Passing Arguments
//whatever arguments are passed to the bound function at the time it is called.

function sum(a, b) {
  return a + b;
}
const addFive = sum.bind(null, 5);
console.log(addFive(3));