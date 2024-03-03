const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
const DcHeros = ["SuperMan", "BatMan", "AquaMan"]

// marvelHeros.push(DcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(DcHeros) // out put as aobject // bad writing of code


// this is not used widely instead used spread  operator

//Spread used when we want to add+ conatenate two or more arrays into one
const allHeros = [...marvelHeros, ...DcHeros] //spread operator used 
console.log(allHeros); // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'BatMan', 'AquaMan' ]

//Flat operator used to merge multiple arrays into one
// const anotherArray = [1,2,3,[4,5,6,[7,8,9,10,[11]]]];
const anotherArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10, [11]]]];


const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]


// to check whether it is Arrayb or not  use // isArray
console.log(Array.isArray(real_anotherArray)); //true
console.log(Array.isArray("Aman")); // false
console.log(Array.from("Aman")); // [ 'A', 'm', 'a', 'n' ]
console.log(Array.from({name: "Aman"})); //Interesting // return [] empty string .. i ahve to declare  first to make arrat from keys or values


let score1 = 100;
let score2 = 200;

console.log(Array.of(score1, score2));