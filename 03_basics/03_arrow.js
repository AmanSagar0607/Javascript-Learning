const user = {
    username: "Aman",
    role: "developer",

    welcomeMessage: function(){
        console.log(`Hello i am ${this.username}, i am a ${this.role}`);
    }
}

// user.welcomeMessage()
// user.username = "Lucky"
// user.welcomeMessage()
// console.log(this) // in node it shows console in {empty string bu tin browser it shows window


// function anime(){
//     let username = "Aman"
//     console.log(this.username);
// }

// anime()


//Arrow Functions
// const anime = () => {
//         let username = "Aman"
//     console.log(this.username);
// }

// anime()


//Explicit Return : when we use return in arrow function
// const addTwo = (num1, num2) => {
//     return  num1 + num2;
// }

// console.log(addTwo(1, 52));

//Implicit Return : when we don't use return in arrow function
// const addTwo = (num1, num2) => num1 + num2

//Here  we can also use arrow function with (num1 + num2) using (paranthases) instead of {curly braces}
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(1, 52));