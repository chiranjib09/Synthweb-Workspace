//A promise represents a value that may be available now, in the future, or never. It can be in one of three states: pending, fulfilled, or rejected.

function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched from server");
      }, 2000);
  });
}

fetchData()
  .then((message) => {
      console.log(message);
      return "Processing data...";
  })
  .then((message) => {
      console.log(message);
      return "Displaying data...";
  })
  .then((message) => {
      console.log(message);
  })
  .catch((error) => {
      console.error("Error:", error);
  });



  //fetchData returns a Promise that either resolves after 2 seconds if successful or rejects if there's an error.
//.then() is used to handle a successful resolution, while .catch() is used to handle errors.