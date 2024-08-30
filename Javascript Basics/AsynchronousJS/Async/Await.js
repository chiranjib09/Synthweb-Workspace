//async and await allow you to write asynchronous code in a more synchronous-looking fashion, making it easier to read and maintain.

function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let success = true;
          if (success) {
              resolve("Data fetched successfully!");
          } else {
              reject("Error fetching data.");
          }
      }, 6000);
  });
}

async function processData() {
  try {
      let message = await fetchData();
      console.log(message);
  } catch (error) {
      console.error(error);
  }
}

processData();
