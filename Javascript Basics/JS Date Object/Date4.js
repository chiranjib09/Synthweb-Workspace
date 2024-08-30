//Get Date Components
//You can extract specific components of a Date object, such as the year, month, day, hours, minutes, etc.

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

console.log(`Year: ${year}, Month: ${month + 1}, Day: ${day}`);
