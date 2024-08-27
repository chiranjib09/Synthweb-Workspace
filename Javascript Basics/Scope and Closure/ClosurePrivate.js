//Private Variables Using Closures
//Closures can also be used to create "private" variables, which are not accessible from outside the function


function createPrivateCounter() {
  let privateCount = 0;

  return {
      increment: function() {
          privateCount += 1;
          return privateCount;
      },
      decrement: function() {
          privateCount -= 1;
          return privateCount;
      },
      getCount: function() {
          return privateCount;
      }
  };
}

const privateCounter = createPrivateCounter();

console.log(privateCounter.increment());
console.log(privateCounter.increment());
console.log(privateCounter.decrement());
console.log(privateCounter.getCount());