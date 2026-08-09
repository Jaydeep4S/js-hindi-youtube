
const   score = 400  // It automatically detect data type
console.log(score);

const balance = new Number(100.023402340234) // we can define data type 
console.log(balance);   // print as an object

console.log(balance.toString());  // converts number into string
console.log(balance.toString().length); //converts number into string and provide length of number
console.log(balance.toFixed(2)); // to write two decimal point

const otherNumber = 23.92364

console.log(otherNumber.toPrecision(3)); // ans : 23.9 precision before decimal
console.log(otherNumber.toPrecision(1)); // Ans : 2e+1 exponental value

const hundred = 100000000
console.log(hundred.toLocaleString()); // Numbers in International standard Unit
console.log(hundred.toLocaleString('en-IN')); // Numbers in indian standard unit

// ===================== Maths =====================

console.log(Math);
console.log(Math.abs(-4)); // absolute value
console.log(Math.round(4.6)); // round off
console.log(Math.ceil(4.2)); // round off to upper value
console.log(Math.floor(4.9)); // round off to lowest value
console.log(Math.min(4,3,6,9,1,2.5)); // to find out Minimum value
console.log(Math.max(4,3,6,9,1,2.5)); // to find out maximum value



const { mixNumber } = require("framer-motion");

console.log(Math.random()); // rendom value between 0 and 1
console.log(Math.random()*10 + 1); // multiply random value with 10 and add 1
console.log(Math.floor(Math.random()*10)+1); // to maintain maths rules

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1))+min); // to get value between min and max e.g. dies game for snake and ledder















