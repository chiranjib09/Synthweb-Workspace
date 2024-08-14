//Takes one or more functions as arguments
//Returns a function as its result

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Chiranjib",sayGoodbye);