//Creating partially applied function in FunctionBindMethod.

function multiply(x,y){
  return x*y;
}
const multiplyByTwo = multiply.bind(null,2);
console.log(multiplyByTwo(5));
