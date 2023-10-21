function sayHi(person){
    return `Hi ${person}`
}

function sayGoodbye(person){
    return `Goodbye ${person}`
}

function drinkCoffee(coffee){
    console.log(`Here's your ${coffee}`)
    return `Here's your ${coffee}`
}



 // --> 0.3s
//sayGoodbye('Mayo') // --> 0.2s
// sayHi('Juan')// --> 0.1s

// setTimeout(function(){
//     drinkCoffee('Americano')
// }, 2000)


// const text1 = normalFunction(); //    |
// const text2 = asyncFunction(text1); // --> 4s to execute
// //     |
// //     |------------------------|
// //                              |
// //  
// setTimeout(()=>{
//     const text3 = normalFunction2(text2);
//     console.log(text3);
// }, 4000)

function someCallbackFunction() {
    console.log('Hey there, Ironhackers!');
}

// const timeoutId = setTimeout(someCallbackFunction, 500);
// // 1. Getting some data from Google Maps
//     // 1.a Google Maps server sends back the data on time with your app logic
//     //1.b Google Maps server takes some time due to some reason to return the data
// // 2. Use this data for displaying to the user

// if(){ // After 1., check if the data has been returned
// // clearTimeout(timeoutId)
// }
// else {
//     // do something else
// }

// let counter = 1;

// const callbackFunction = function () {
//   console.log(counter);
//   counter += 1;
//   setTimeout(callbackFunction, 1000); // recursive function call
//   if(counter < 11){
    
 
//   }
//   else {
//     clearTimeout(timeoutId)
//   }
// };

// let timeoutId = setTimeout(callbackFunction, 1000);
 
// setTimeout(()=> console.log('Hey There :)'), 1000)

// setInterval(()=> console.log('Hey there :)'), 1000)

// let i = 1;

// const secondCallbackFunction = function () {
//     console.log(i);
   
//     i++;
   
//     if (i > 10) {
//       clearInterval(intervalId);
//     }
//   }
// const intervalId = setInterval(secondCallbackFunction, 1000);

let i = 10;
const intervalId = setInterval(function () {
  if (i > 0) {
    console.log(i);
  } else {
    console.log('Pop!');
    clearInterval(intervalId);// stopping the loop
  }
 
  i--; // i = i - 1 --> decreasing i by 1
}, 1000);
