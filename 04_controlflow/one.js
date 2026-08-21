// if

// const isUserLoggedIn = true
// const temperature = 39

// if (temperature<50){
//     console.log("temperature is less than 50")
//     //else console.log("more than 50");
// }else {
//     console.log("temperature is more than 50");
// }

//const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
    
// }
// console.log(`user power : ${power}`);

// short hand code , don't use this as this is very unmature code

// const balance = 1000

// //if (balance > 500) console.log("test"),console.log("test2");
// if (balance < 500){
//     console.log("less than 500");
    
// }else if (balance<750){
//     console.log("less than 750");
    
// }else if (balance<950){
//     console.log("less than 950");
    
// }else console.log("less than 1200");

const userLoggedIn = true
const dabitcard = true
const isUserLoggedInFromGoogle = false
const ifUserLoggedInFromEmail = true

if (userLoggedIn && dabitcard && 2==3){
    console.log("allow to buy course");
}

// || is used for or condition
if(isUserLoggedInFromGoogle || ifUserLoggedInFromEmail){
    console.log("user logged in");
    
}