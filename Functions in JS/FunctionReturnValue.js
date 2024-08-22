//function can return a value using the return statement. The value returned by the function can be any data type, such as a number, string, object, array, or even another function.

//Returning an OBJECT

function createUser(name, age) {
  return {
    name: name,
    age: age
  };
}

const user = createUser("Arijit", 25);
console.log(user);
