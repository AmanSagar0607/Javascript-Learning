const score = 500
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // FOR FIXED VALUE


const otherNumber = 256.55
// console.log(otherNumber.toPrecision(3)) //PRECISON UPTO..


const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')) / /NUMBERS IN INDIAN FORMAT


//////////////////// MATHS

console.log(Math);

//absolute Value
// console.log(Math.abs(-4)); // convert negative to postive
// console.log(Math.round(554.745455)) //Roundoff
// console.log(Math.ceil(554.2)) // roundoff but for ceil value
// console.log(Math.floor(554.2)) // round off but for floor value
// console.log(Math.sqrt(25)) // square root
// console.log(Math.min(4,5,5,5,5,5,2,7,8,9,2)) //min value
// console.log(Math.max(4,5,5,5,5,5,2,7,8,9,2)) //max value 


console.log(Math.random()); // value between 0 and 1
console.log((Math.random()*10) + 1); // value between 0 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min); //random number started from 10 