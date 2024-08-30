//Comparing Dates
//Compare Two Dates
//You can compare dates by converting them to their timestamp using getTime().

let date1 = new Date('2024-08-16');
let date2 = new Date('2024-08-17');

if (date1.getTime() < date2.getTime()) {
    console.log('date1 is earlier than date2');
} else if (date1.getTime() > date2.getTime()) {
    console.log('date1 is later than date2');
} else {
    console.log('date1 and date2 are the same');
}
