//if

// const isLoggedIn = true
// const temperature = 41

// if ( temperature < 50) {
//     console.log("executed");}
// else{
//     console.log("not equal")
// }

// >, <, <=, >=, ==, !=
// === this is check equal and also the type


// const score = 2000
// if ( score  > 1000) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }


const balance = 500

//Explicit
// if (balance > 200) {
//     console.log("test")
// }

//Implicit but only write in onle line
// if (balance > 200)  console.log("test");


//nested if else

// if(balance > 400){
//     console.log("less than 400")
// }

// else if (balance > 500) {
//     console.log("greater than 500")
// }

// else if (  balance == 500) {
//     console.log("equal to 500")
// }



const userLoggedIn = true
const debitCard = true 
const LoggedInFromGoogle = true
const LoggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("allowed")
}


if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("user logged in")
}