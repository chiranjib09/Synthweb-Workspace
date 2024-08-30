//Write a function that logs "Hello" to the console after a delay of 2 seconds. Then, log "World" immediately after. Make sure "World" is printed first, and then "Hello" appears after the delay in asynchronous javascript

//By using 'setTimeout' function

function delayedHello() {
  console.log("Chiru");

  setTimeout(() => {
      console.log("Hello");
  }, 4000);
}

delayedHello();
