// function sayMyName(){
//     console.log("j");
//     console.log("a");
//     console.log("y");
//     console.log("d");
//     console.log("e");
//     console.log("e");
//     console.log("p");     
// }

// sayMyName()

// function addNumber(num1,num2){   
//     console.log(num1+num2);  // This is like formula
    
// }
// const Result =  addNumber(3,5)
// console.log("Result:",Result);

function addNumber(num1,num2){   
    // let result = num1+num2   // Method 1
    // return result 
    // console.log("Jaydeep");  // will not print after 
    return num1 + num2
    
}

const Result =  addNumber(3,5)
// console.log("Result:",Result);

function logginUserMsg(username = "Sam"){
    if(username === undefined){
        console.log("Please Log In");
        return
    }
    return `${username} just logged in`

}
// console.log(logginUserMsg());
 
function calculateCartValue(val1,val2,...num1){   // rest operator
    return num1 // by using this rest operator we can add multiple number
}

//console.log(calculateCartValue(2,4,5,7,1,4))

const user = {
    username : "Jaydeep",
    price : 199
}

function hendleobject(anyobject){
    console.log(`user name is ${anyobject.username} and 
        price is ${anyobject.price}`);
    
}

//hendleobject(user)
hendleobject({
    username : "jasmit",
    price : 299
})

const myNewArray = [200,300,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600.1000,50]));
