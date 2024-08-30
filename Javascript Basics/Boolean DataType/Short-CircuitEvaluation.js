//JavaScript uses short-circuit evaluation with logical operators. In the case of && and ||, the evaluation stops as soon as the result is determined.

//&& (AND) stops if the first operand is false (because the whole expression can't be true).
//  || (OR) stops if the first operand is true (because the whole expression must be true).

let name = "John";
console.log(name && "Hello, John!");
let empty = "";
console.log(empty || "No name provided");
