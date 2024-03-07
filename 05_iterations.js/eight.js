//Reduce Function

const myNum = [1,2,3,4]

// const myTotal = myNum.reduce (function (accumulate, currentvalue){
//     console.log(`accumulate: ${accumulate} and currentvalue: ${currentvalue}`)
//     return accumulate + currentvalue;
// }, 0)

// console.log(myTotal)

//using Arrow Function
/*explicit */ let myTotal = myNum.reduce ((accumulate, currentvalue) => { return accumulate + currentvalue }, 0);
/*implicit */ myTotal = myNum.reduce ((accumulate, currentvalue) => accumulate + currentvalue, 0);

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 3999,
    },
    {
        itemName: "Node Course",
        price: 2999,
    },
    {
        itemName: "Py Course",
        price: 4599,
    },
    {
        itemName: "C++ Course",
        price: 6999,
    },
]

let total = shoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(total) 
