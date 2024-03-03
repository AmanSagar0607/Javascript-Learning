var accountPassword = "12aa545" // can  be deaclare and change again // variable declared are available throughout the function in which they are declared
const accountId = 14458 //can not be deaclare and change again
let accountEmail = "randommail@gmail.com" // can be declared and change again // variable declared are only available inside the block where they are defined
accountCity = "jaipur" // We can declare using this type but is not good code writing
let accountStatus; // undeclared


console.log(accountId);

/*
prefer Not to uee VAR  because of issue in block and functional scope
*/

// accountId = 20 //not allowed to have more than 1 time
accountEmail = "ss@gmail.com";
accountPassword = "12555";
accountCity = "Mumbai";

console.table([ accountId ,accountEmail, accountPassword, accountCity, accountStatus]);