//Arrays

const myArr = [0,1,0,1,0,1,2,0];
// console.log(myArr[6]);


//Array Methods
// myArr.push(7)
// myArr.pop(0)


// myArr.unshift(0)
// myArr.shift();

// console.log(myArr.indexOf(2));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


//Slice Methods / Splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)
