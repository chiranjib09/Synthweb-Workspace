
function outerFunction(outerVariable) {
  return function innerFunction() {
    console.log(outerVariable);
  };
}
const myClosure = outerFunction('Hello from outer function');
myClosure();