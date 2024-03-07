//For

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if( element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element)
// }


//Outer Loop
// for (let i = 1; i < 5; i++) {
//     console.log(`Outer loop value: ${i}`);
//     //Inner Loop
//   for (let j = 1; j < 5; j++) {
//     console.log(`iner loop value: ${j} and inner loop value: ${i}`);
//     console.log((i + '*' + j + ' = ' + i*j))
//   }
// }



let myarray = ["batman", "ironman", "spiderman"]
//console.log(myarray.length)

for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    //console.log(element)
}


// break and continue


//break
for (let index = 0; index < 20; index++) {
    if (index ==5) {
        console.log(`detected 5`)
        break;
    }
  console.log(`value: ${index}`)
    
}


// continue
for (let index = 0; index < 20; index++) {
    if (index ==5) {
        console.log(`detected 5`)
        continue;
    }
  console.log(`value: ${index}`)
    
}