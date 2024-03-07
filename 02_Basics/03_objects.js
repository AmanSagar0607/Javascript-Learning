// singleton lietrals se nhi banta he lekin constructor se hmesha banta he 

//object.create  it is a constructoe method 



//objects lietrals


const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    "full name": " Aman Sagar",
    [mySym]:"myKey1", // output [Symbol(key1)]: 'myKey1' //[] is used for sccess symbol otherwise without [] it shows string
    age: 20,
    email: "amansagar0307@gmail.com",
}




/*These are the methods to  access  first is .name , .email and second is using sqaure bracket with string double quotaion ["name"], ["email"] */

// console.log(JsUser) // { name: 'AMAN', age: 20, email: 'amansagar0307@gmail.com' } // it ias a way But it is not a great way
// console.log(JsUser["full name"])
// console.log(JsUser.email) //  email: 'amansagar0307@gmail.com 
// console.log(JsUser["email"]) // email: 'amansagar0307@gmail.com
// console.log(typeof JsUser[mySym])



// value change using . notaion se
JsUser.email = " luckysagar6265@gmail.com"
console.log(JsUser["email"]) // email : luckysagar6265@gmail.com


//Freeze the value using Object.freeze

// Object.freeze(JsUser)
JsUser.email = " luckysagar6265@gmail.com"
// JsUser.email = " luckysagar74265@gmail.com"
console.log(JsUser["email"])


//FUNCTIONS IN OBEJCTS

JsUser.greeting = function(){
    console.log("Hello");
}

JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)
    console.log(`Hello, ${this["full name"]}`)
};

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())