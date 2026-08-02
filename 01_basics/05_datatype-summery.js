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
console.log(id===anotherId);  // here both are different

// const bigNumber = 527352752873468468836286n   // bigInt

const heros = ["shaktiman" , "muganbo" , "nagraj"]  // array

let myObj = {
    name: "Jaydeep",
    Age : 23
} // objects written in { }

const myFunction = function(){
    console.log("Hello World")
}

// 