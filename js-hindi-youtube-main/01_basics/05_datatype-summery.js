// # Primitive  and Non Primitive(Referance Type)

/* Primitive data type
    7 Types : String , Number , Boolean , null , undefined , Symbol , 
    BigInt ( for scientific Value)

*/

/*
Referance (Non Premitive)
   Array , Objects , Functions

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id===anotherId);  // here both are different

// const bigNumber = 527352752873468468836286n   // bigInt

const heros = ["shaktiman" , "muganbo" , "nagraj"]  // array

let myObj = {
    name: "Jaydeep",
    Age : 23
} // objects written in { }

const myFunction = function(){
    console.log("Hello World")
}

// https://262.ecma-international.org/5.1/#sec-11.4.3


/* ============== Memory ===============================
   There are two types of memory
   1> Stack ( use in primitive type) we get copy in which we can change value
   2> Heap ( use in Non- Primitive) we get referance

*/

let myYubename = "mytestchennel"
let anotherName = "woohooo channer"

console.log(myYubename);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "jaydeep@google.com"

console.log(userOne);
console.log(userTwo);

