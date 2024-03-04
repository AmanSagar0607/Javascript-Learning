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