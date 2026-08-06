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

===================== Maths =====================

console.log(Math);
console.log(Math.AbstractRange(-4));









