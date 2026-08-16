// var c = 3000 
let a = 2000
// {} - this curly bracket is called scope , scope of that program
if(true){
    let a = 10
    const b = 20
    var c = 30 // here 30 is inside the scope but 
    // it prints outside scope 
    //console.log("Inner: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    username = "jaydeep"
    function two(){
        website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}
// one()

if(true){
    const username = "jaydeep"
    if (username==="jaydeep"){
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website); // website is inside scope so error
    
}
//console.log(username); // username is inside scope so error


// ++++++++++++++ Intresting +++++++++++++++


console.log(addOne(5))
function addOne(num){
    return num + 1

}


addTwo(5)
const addTwo = function addTwo(num){
    return num + 2

}
