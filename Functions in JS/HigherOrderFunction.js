//It takes another function as an argument or returns a function.

function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(10, 5, (x, y) => x - y));