//Create a function loadData(callback) that simulates fetching data asynchronously (using setTimeout to simulate the delay). Once the data is "fetched", call the callback function to process and log the data in asynchronous javascript

function loadData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
      let data = "Data fetched successfully!";
      callback(data);
  }, 2000);
}
function processData(fetchedData) {
  console.log("Processing data...");
  console.log(fetchedData);
}
loadData(processData);
