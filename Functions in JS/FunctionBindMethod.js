//Setting the "this" Value
//creates a new function that, when called, has its this keyword set to the provided value


function greet (){
  console.log("Hello, " + this.name);
}
const person = {name: "Chiru"};
const boundGreet = greet.bind(person);
boundGreet();