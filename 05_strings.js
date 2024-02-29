const name = "Aman"
const repoCount = 50


// console.log(name + repoCount + " value") // outdated he 

// instead use this
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String ('Ludo') // declare a string using // New 
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.bold())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))

console.log(gameName.anchor())

const newString = gameName.substring(0, 3) // the last length ouput will be n-1 like 3 => 2
// can't assign negative value in substring 
console.log(newString)

const anotherString = gameName.slice(-3, 2) // only here negative value can be used 
console.log(anotherString)

const  newStringOne = "      aman      "
console.log(newStringOne)
console.log(newStringOne.trim()) // remove the or trip the spaces 


const url = "http://google.com/goole%20images"
console.log(url)
console.log(url.replace('%20', '-')) // replace thw words
console.log(url.includes('microsoft'))


const splitString = "aman-sagar"
console.log(splitString)
console.log(splitString.split('-'))

