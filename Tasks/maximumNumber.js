let numbers = [1,2,3,4,5,6,7,8,9];
let maximumNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximumNumber) {
        maximumNumber = numbers[i];
    }
}
console.log(maximumNumber);
