//Basic closure Syntax



function outerFunction() {
  let outerVar = "I'm outside!";

  function innerFunction() {
      console.log(outerVar);
      // Accesses outerVar from the outer function's scope
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc();

