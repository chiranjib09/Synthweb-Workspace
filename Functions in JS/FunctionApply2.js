//To find minimum or maximum in an Array.

const numbers = [5, 6, 2, 3, 7];
const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber);
const minNumber = Math.min.apply(null, numbers);
console.log(minNumber);
