//You can also define default values for function parameters. If an argument is not provided when the function is called, the default value is used.

function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet();
greet("Aman");
