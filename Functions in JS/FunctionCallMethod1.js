//Changing the "this" context

function greet(){
  console.log("Hello," + this.name);
}
const person1 = {name: "Maya"};
const person2 = {name: "Rohit"};
greet.call(person1);
greet.call(person2);