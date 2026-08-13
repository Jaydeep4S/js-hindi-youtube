// singleton -- creates by constructor
// object.create
// literals - constructor - singleton



// Object literals

const mySyn1 = Symbol("key1"); // use as symbol

const jsUser = {
    name: "jaydeep",
    "full Name": "jaydeep solanki",

    [mySyn1]: "key1", // Symbol property

    age: 28,
    location: "vadodara",
    email: "jaydeep@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Access email using dot notation
console.log(jsUser.email);

// Access email using bracket notation
console.log(jsUser["email"]);

// This gives an error because property name contains a space
// console.log(jsUser.full Name);

// Correct way to access "full Name"
console.log(jsUser["full Name"]);

// Check Symbol property
console.log(typeof jsUser[mySyn1]);

// Change email
jsUser.email = "jaydeep@yahoo.com";

console.log(jsUser.email);

// Freeze object
// Object.freeze(jsUser);

// This change will NOT work because object is frozen
jsUser.email = "jayesh@yopmail.com";

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS users");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS users , ${this.name}`)
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

