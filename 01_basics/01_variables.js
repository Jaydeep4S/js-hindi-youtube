const accountId = 144532
let accountEmail = "jaydeep@google.com" 
var accountPassword = "12345" // use let instead of var
accountCity = "Ahmedabad"  // not recomanded
let accountState;  // when value is not undefind 

//accountId = 2 // not allowed

accountEmail = "jd@google.com"
accountPassword = "12123"
accountCity = "Baroda"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/