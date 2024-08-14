//using "call" with an empty object.


function logArguments() {
  console.log(arguments);
}

logArguments.call({}, 1, "hello", true);