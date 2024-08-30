//Write a function getNumber() that returns a Promise. The Promise should resolve with a random number between 1 and 10 after 1 second. Use then() to log the number once the Promise is resolved in asynchronous javascript

function getNumber() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let randomNumber = Math.floor(Math.random() * 10) + 1;
          resolve(randomNumber);
      }, 1000);
  });
}
getNumber().then((number) => {
  console.log("Random number:", number);
});
