// Type casting in Boolean
//To convert the given input to boolean the Boolean() is used which takes the given value as the parameter and converts it into the Boolean form.

console.log("cases where the method will return true")
console.log("given input is rw",Boolean('rw'))
console.log("given input is -3.6",Boolean(-3.6))
console.log("given input is new Date()",Boolean(new Date()))
console.log("cases where the method will return false")
console.log("given input is number 0",Boolean(0) )
console.log("given input is null value",Boolean(null) )
console.log("given input is undefined",Boolean(undefined))
console.log("given input is empty string",Boolean('') );