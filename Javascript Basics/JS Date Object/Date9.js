//Calculating Time Differences
//Calculate Difference Between Two Dates
//We can calculate the difference between two dates using the getTime() method, which returns the time in milliseconds since January 1, 1970 (the Unix epoch).

let date1 = new Date('2024-08-16');
let date2 = new Date('2024-09-16');

let timeDifference = date2.getTime() - date1.getTime();
let dayDifference = timeDifference / (1000 * 3600 * 24);

console.log(`Difference in days: ${dayDifference}`);
