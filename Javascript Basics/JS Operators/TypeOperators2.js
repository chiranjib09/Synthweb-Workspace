//Instanceof Operators
//The instanceof operator checks whether an object is an instance of a specific class or constructor function. It returns true if the object is an instance of the specified class, otherwise false.

class Person {}
let person = new Person();

console.log(person instanceof Person);
console.log(person instanceof Object);
console.log(person instanceof Array);

let arr = [1, 2, 3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);
