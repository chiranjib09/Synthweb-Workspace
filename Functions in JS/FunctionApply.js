// To call a function 

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}
const person = { name: "Chiru" };
greet.apply(person, ["Hello", "Das"]);
