// console.log("Hi my name is Aman Sagar");
// console.log("I am a web developer");
// console.log("I am exploring ReactJS");

function about() {
  console.log("Hi my name is Aman Sagar");
  console.log("I am a web developer");
  console.log("I am exploring ReactJS");
}

// about()

// when we take input for defination called Parameter and when these inputs are call they are  called arguments

// function addTwoNumbers(num1, num2 //Paraneter or param){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {
  // let result = num1 + num2;
  // return result;   1st way

  return num1 + num2; // 2nd way
}

const result = addTwoNumbers(8, 5);
// console.log("result is ", result)

// addTwoNumbers("588+88,", 5+5 )
// addTwoNumbers(5,8 // Arguments)





function loginUser(username = "randomUsername") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUser())




function calculateCartPrice(...num) {
  return num;
}

// console.log(calculateCartPrice(200,2,0,2,0,0,0,0,02,0,0))





//object
const user = {
  username: "Aman",
  price: 555,
};

// call object in function
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

//print function
handleObject({
  username: "Aman",
  price: 555,
});

//Arrays in function
const myarray = [200, 400, 500, 455];

function returnSecondValue(getarray) {
  return getarray[2];
}

// console.log(returnSecondValue(myarray));
console.log(returnSecondValue([200, 400, 500, 455]));
