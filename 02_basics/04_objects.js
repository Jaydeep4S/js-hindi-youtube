// const thinderUser = new object() - singalton object

const { object } = require("framer-motion/m")

const thinderUser = {} // non singleton object
// console.log(thinderUser);

thinderUser.id = "123abc",
thinderUser.name = "Sammy",
thinderUser.IsLoggedIn = false

// console.log(thinderUser);

const regularUser = {
    email : "someone@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Jaydeep",
            lastName : "Solanki"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

// combine objects

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e"}
const obj4 = {6:"f",7:"g"}
//const obj3 = {obj1,obj2} // will not give you proper result , all value goes to obj1
// const obj3 = Object.assign({},obj1,obj2,obj4) // all value goes to empty object
const obj3 = {...obj1,...obj2,...obj4} // spread operator like we use in array
// console.log(obj3);

console.log(thinderUser);

console.log(Object.keys(thinderUser));
console.log(Object.values(thinderUser));
console.log(Object.entries(thinderUser));

console.log(thinderUser.hasOwnProperty('IsLoggedIn')); // to check whether this property available or not
