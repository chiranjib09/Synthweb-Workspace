//It allow summing all the arguments passed to the sum function.

function sum() {
  return Array.prototype.reduce.apply(arguments, [(acc, curr) => acc + curr, 0]);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result);
