
// Arrays written in [ ] , values are called elements

const myArray = [0,1,2,3,4,5,"jaydeep"]
const myHero = ["amitabh","srk","ranbir"]
const array2 = new Array(3,5,9,7)

console.log(array2[1]); // [1] shows index value


// Array Methods 

const { TbMathYMinusY } = require("react-icons/tb");

// myArray.push(6) // to add value in array
// myArray.push(7)
// myArray.pop() // to remove last value 
//myArray.unshift("Ry")  // to add value to the start
//myArray.shift() // to remove first value

const newArray = myArray.join() // to convert array into string
console.log(myArray.includes(9)) // to know whether 9 is include in array or not
console.log(typeof(newArray));
console.log(newArray);

// ============ slice, splice

/*
// slice() does NOT change the original array.
// splice() DOES change the original array.
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(1, 3);

console.log(fruits);
console.log(result);

let fruits2 = ["Apple", "Banana", "Mango", "Orange"];

let result2 = fruits.splice(1, 3);

console.log(fruits2);
console.log(result2);

*/

console.log("A",myArray);
const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)
console.log("c",myArray)
console.log(myn2);







