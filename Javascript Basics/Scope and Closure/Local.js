//Function Scope under Local Scope


function localFunction() {
  let localVar = "I'm a local variable";
  console.log(localVar); 
  // Outputs: I'm a local variable
}

localFunction();
console.log(localVar); 
// output Reference Error: localVar is not defined
