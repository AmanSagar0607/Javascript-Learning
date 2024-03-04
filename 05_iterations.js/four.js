//For In
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     py: 'python',
// }



// for (const key in myObject) {
//     console.log(`${key} is shortcut for ${myObject[key]}`)
// }

const programming = ["js", "cpp", "py"]

for (const key in programming) {
    console.log(programming[key]);
}