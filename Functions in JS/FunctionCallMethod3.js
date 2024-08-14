//Borrowing methods 
//Its primary purpose is to invoke a function with a specified this value.
//It allows you to pass arguments to the function.

const person = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
};
  const employee = {
  firstName: "Aman",
  lastName: "Das"
};
console.log(person.fullName.call(employee));

