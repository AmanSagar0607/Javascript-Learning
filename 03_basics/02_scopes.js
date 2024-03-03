var a = 5; // Declares a variable with function or global  scope, allowing re-declaration and updating anywhere within its function.
let b = 10; // Declares a variable with block scope, permitting reassignment within its block and can't be redeclare again.
const c = 15; // Declares a variable with block scope that cannot be reassigned after initialization, though its properties can be modified.

if (true) {
  var a = 55;
  b = 110;
  const c = 155;
}

// b = 180;

// console.log(a)
// console.log(b);
// console.log(c)

function one() {
  const username = "Aman";

  function two() {
    const website = "http.google.com";
    console.log(username);
  }
  // console.log(website);
  // two()
}

one();

if (true) {
  const username = "Aman";
  if (username == "Aman") {
    const website = " youtube.com";
    // console.log(username + website)
  }

  // console.log(website)
}
//   console.log(username)

//++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++
 //These are the both ways to declare fucntions
 //here hoisting term used for initialization 


 console.log(addone(5))
function addone(num) {
  return num + 1
}


const addtwo /*expression*/ = function (num) {
  return num + 2
}

console.log(addtwo(5));
