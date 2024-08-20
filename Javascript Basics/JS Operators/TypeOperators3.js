//New Operator
//The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

function Car(){}
const car1 = new Car();
const car2 = new Car();

console.log(car1.color);
Car.prototype.color = "original color";
console.log(car1.color);

car1.color = "black";
console.log(car1.color);

console.log(Object.getPrototypeOf(car1).color);
console.log(Object.getPrototypeOf(car2).color);
console.log(car1.color);
console.log(car2.color);