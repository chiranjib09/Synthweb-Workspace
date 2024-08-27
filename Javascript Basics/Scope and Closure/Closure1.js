//CLOSURE with a counter
//A common use of closures is to create a function that "remembers" a value from its outer scope. For example, you can create a simple counter

function createCounter() {
  let count = 0;

  return function() {
      count += 1;
      return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
