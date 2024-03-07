// For Each 
// ye call back karta he

// const programming = ["js", "cpp", "py"]

// programming.forEach (function  (item) {
//     console.log(item)
// } )

//Arrow Function

// programming.forEach ( (item) => {
//     console.log(item)
// })

// programming.forEach ( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const programming = [
    {
    languageName: "Javascript",
    languagefileName: "js",
    },
    {
    languageName: " python",
    languagefileName: "py",
    },
]


programming.forEach( (item) => {
    console.log(item.languagefileName);
})

const heros = [
    {
        heroname: "superman",
        power: "superStrength",

    },
]

//For each
heros.forEach ( (item) =>{
    console.log(item.power)
})
