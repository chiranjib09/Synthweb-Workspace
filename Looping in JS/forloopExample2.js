const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}

//The for...in loop is used to iterate over the properties of an object.
//It's a convenient way to access and process the key-value pairs within an object.