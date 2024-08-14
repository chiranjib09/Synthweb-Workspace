// Function as a method
//A function can be a property of an object, in which case it's called a method

const person = {
  firstName: "Rahul",
  lastName: "Das",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());