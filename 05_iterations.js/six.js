// const coding = ["js", "cpp", "py"]

// coding.forEach( (item) => {
//     console.log(item)
// })

// //what if we want to store this in a variable
// const values = coding.forEach( (item) => {
//     console.log(item)
// })

// console.log(values)
// output : undefined
// iska matlab for each koi bhi value return nhi karta he

// to iske liye Filter use karte he

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myNum.filter( (num) => num > 2 /* condtiotn*/) // here num is a value for numbers

// const newNum = myNum.filter( (num) => num > 2) // implicit return
// console.log(newNum)

// const newNum = myNum.filter( (num) => {
//     num > 2 // here the return is not used and it is implicit so is output will show [ ] array to get the correct result we should use explicit return
// })
// console.log(newNum)
// Output me empty array aaygaa due to explicit return yah par use nhi kiya gay he ye implicit return he // yaha scope { } he to isko return use karna pdega like return num > 4 not num > 4

// Thats why we are using explicit return here
// const newNum = myNum.filter( (num) => {
//     return num > 2 // Explicit return
// })
// console.log(newNum);

// we can use forEach also for this

// const newNum  = []
//  myNum.forEach ( (num) => {
//     if (num > 2) {
//         newNum.push(num)
//     }
//  } )
//  console.log(newNum);

//Filter

const books = [
    { title: "Book one", genre: "Fantasy", publish: 1995, edition: 2010 },
    { title: "Book two", genre: "Mystery", publish: 2008, edition: 2019 },
    { title: "Book three", genre: "Historical Fiction", publish: 1987, edition: 2005 },
    { title: "Book four", genre: "Romance", publish: 2012, edition: 2018 },
    { title: "Book five", genre: "Science Fiction", publish: 2000, edition: 2015 },
    { title: "Book six", genre: "Horror", publish: 1992, edition: 2007 },
    { title: "Book seven", genre: "Thriller", publish: 2017, edition: 2022 },
    { title: "Book eight", genre: "Fantasy", publish: 1996, edition: 2016 },
    { title: "Book nine", genre: "Spy Fiction", publish: 2003, edition: 2014 },
    { title: "Book ten", genre: "Literary Fiction", publish: 2010, edition: 2019 },
  ];
  

  let userBooks = books.filter((bk) => bk.genre === 'Fantasy');
  console.log(userBooks);
  
userBooks = books.filter((bk) => bk.publish >= 2000 && bk.genre === 'history');
  console.log(userBooks);
