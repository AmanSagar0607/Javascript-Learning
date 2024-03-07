// const userEmail = "amansagar0307@gmail.com"

// if(!userEmail){
//     console.log("got user email")
// } else{
//     console.log("don't have user email")
// }


// Falsy Values
// false, 0, -1, bigInt, 0n, "", null, undefined, NaN

//Truthy Values
// 'false', "0", " ", [], {}, function(){}


const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}


//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 ?? 10 
console.log(val1)

let val2;
val2 = undefined ?? 10
console.log(val2)


//Terniary Operator

// condition  ? true : false
const iceCoffePrice = 400
iceCoffePrice >= 80 ? console.log("less than 80") : console.log("more than 80")