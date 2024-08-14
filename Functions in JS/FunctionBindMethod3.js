//Currying in FunctionBindMethod .
// a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

function add(x, y, z) {
  return x + y + z;
}
const addX = add.bind(null, 1);
const addXY = addX.bind(null, 2);
console.log(addXY(3));