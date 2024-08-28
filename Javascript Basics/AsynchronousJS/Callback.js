//Handling Asynchronous Data Fetching with Callbacks.

function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
      const data = { id: 1, name: "Product A" };
      callback(data);
  }, 3000);
  //3 second latency
  }

function processData(data) {
  console.log("Processing data...");
  console.log(`Product ID: ${data.id}, Product Name: ${data.name}`);
}

fetchData(processData);


//fetchData(callback) simulates fetching data from a server.
//After a delay of 3 seconds (simulated by setTimeout), it calls the callback function, passing the fetched data object to it.
//processData(data) is the callback function that processes the fetched data and logs the product details.

