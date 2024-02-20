/* Data Types */


// Primitive Types
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Number
const score = 100

//String
const ScoreValue = "Aman"

// Boolean
const isLoggedIn = false

//Null
const outSideTemp = null

//Undefined
let userEmail;

//Symbol
const id = Symbol ('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

//BigInt
const bigNumber = 888885555555555555555888888n




// Reference Type ( Non Primitive)
// Arrays, Objects, Functions

//Arrays 
const heros = ["shaktimaan", "naagraj", "doga"];
console.log("heros:", heros);

//Objects
let myDetails = {
    name: "Aman Sagar",
    age: "20"
}
//Function
const myFunction = function(){
    console.log("Hello");
}

console.log(typeof myFunction) // these are function 



// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive {copy milti he value ki})
// Heap (Non Primitive {refernece milta he => oroginal value})


//Stack(copy milta he oroginal value ka)
 let instUser = "amansagar"
 let anotherInstaUser = "luckysagar"

 console.log(instUser)
 console.log(anotherInstaUser)


////////////

// Heap (copy nhi milta he oroginal value ka reference milta he)
let userOne = {
    email:"amansagar@gmail.com",
    name:"Aman"
}

let userTwo = userOne;

console.log(userOne)
console.log(userTwo)

userTwo.email = "luckysagar@gmail.com";
userTwo.name = "Lucky";

console.log(userOne)
console.log(userTwo)