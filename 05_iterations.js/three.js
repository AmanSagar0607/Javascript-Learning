// for of

// thse are array specefic loops

// ["", ""]


// const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num)
// }

const greeting = "Hello World!"
for (const greet of greeting) {
       console.log(`Each  char is ${greet}`)
}

//Maps
const map = new Map()
map.set('In', "India")
map.set('Pak', "Pakistan")
map.set('Rus', "Russia")
map.set('In', "India")

// console.log(map);


//For of loop
// for (const key of map) {
//     console.log(key)
// }
console.log(map);

for (const [key, value] of map) {
    console.log(key, value)
}

