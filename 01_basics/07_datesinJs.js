/*
// Dates

let myDate = new Date()
console.log(myDate); // to print date 
console.log(myDate.toDateString()); // to convert date into string
console.log(myDate.toISOString()); // to get time in universal time zone , The "Z" at the end indicates that the time is in Coordinated Universal Time (UTC)
console.log(myDate.toJSON()); // get date time in json format in universal format
console.log(myDate.toLocaleDateString()); //get date time in universal format
console.log(myDate.toLocaleString()); //get date only
console.log(myDate.toLocaleTimeString()); // get date with time in AM/PM indian time
console.log(myDate.toString());  // get time in indian time AM/PM format
console.log(myDate.toTimeString()); // get time in indian standard time
console.log(myDate.toUTCString()); // get time in GMT format
console.log(myDate.getFullYear()); // get year
*/

// let myCreatedDate = new Date (2024,0,19) // to get default date yyyy, Month starts with 0(January), date
let myCreatedDate = new Date (2024,0,19 , 5 , 3) // as above with time
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now
console.log(myTimeStamp())
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getMonth()); // month starts with 0(january)
console.log(myCreatedDate.getDay()); // day starts from monday(1)











