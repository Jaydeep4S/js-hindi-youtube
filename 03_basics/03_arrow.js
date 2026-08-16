const user = {
    username : "jaydeep",
    price : 999,
    welcomemsg : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()
// console.log(this);

// function chai(){
//     let userName="jaydeep"
//     console.log(this.chai);  // this dosent work in function
    
// }

// chai()

// const chai = function() {
//     let userName="jaydeep"
//     console.log(this.userName); 
// }

const chai =  () => {
    let userName="jaydeep"
    console.log(this.userName); 
}

// chai()

// const addTwoNum = (num1,num2) => {  
//     return num1 + num2  // in curly bracket , return keyword compulsory
// }
// console.log(3,7); // this will concat two numbers
// console.log(addTwoNum(3,7)); // this will add two numbers

const addTwoNum = (num1,num2) =>  (num1 + num2)  // implesive return
// in small bracket return keyword not required

// const addTwoNum = (num1,num2) =>  ({username : "jaydeep"}) // Object
console.log(3,7); // this will concat two numbers
console.log(addTwoNum(3,7)); // this will add two numbers