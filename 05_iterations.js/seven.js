
//map()
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map Function
// const newNum = myNum.map( (num) =>  num + 10)



//Chaning : we can use more than two methods like a chain 
//syntax : const newNum = myNew.map().map().map()


const newNum = myNum.map((num) =>  num * 10).map( (num) => num + 10).filter( (num) => num  >= 40)

console.log(newNum)