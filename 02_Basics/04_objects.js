// // const tinderUser = new Object() // It is a Singleton Object


// const tinderUser = {}   // It is a Non-Singleton Object
// tinderUser.id = "12354s"
// tinderUser.name = " anonymous"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);


// const regularUser = {
//     email: "anonymous@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Aman",
//             lastname: "Sagar",
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname)
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// //combinig the two objects using Assign
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// //combinig the two objects using Spread
// const obj4 = {...obj1, ...obj2}
// console.log(obj4)



// console.log(tinderUser) //{ id: '12354s', name: ' anonymous', isLoggedIn: false }
// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) //  [ '12354s', ' anonymous', false ]
// console.log(Object.entries(tinderUser)) //  [ ['id', '12354s' ],[ 'name', ' anonymous' ],[ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // TRUE



// Object destructor

const course = {
    cousreTitle: "Learning Javascript",
    platform: "Youtube",
    price: 0,
}

// console.log(course.title)

// agar mujhe baar baar ise use karna he to har baar likhna pdega iske liye  destrcutor ka use krte he 
const {cousreTitle: title} = course;

console.log(title);


// Apis

{
    name: "Aman Sagar",
    age: 20,
    professional: "web Developer",
}