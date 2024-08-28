//Given the array let fruits = ["apple", "banana", "cherry", "date", "fig"];, remove "cherry" using splice() and insert "mango" and "grape" at that position. Print the updated array in javascript

let fruits = ["apple", "banana", "cherry", "date", "fig"];

fruits.splice(2, 1, "mango", "grape");

console.log(fruits);
