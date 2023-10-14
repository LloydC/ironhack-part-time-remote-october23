// .sort method example
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// function compare(a, b) {
//     if (a < b) return -1; // a is less than b
//     if (a > b) return 1; // a is greater than b
//     if (a === b) return 0; // a equals b
  
// }

// const lowestToGreatest = numbers.sort((a, b) => {
//     if (a < b) return -1; // a is less than b
//     if (a > b) return 1; // a is greater than b
//     if (a === b) return 0; // a equals b
// })

const lowestToGreatest = [...numbers].sort((a, b) => {
   return a-b;
})

// const greatestToLowest = numbers.sort((a, b) => {
//     if (a < b) return 1; // a is less than b
//     if (a > b) return -1; // a is greater than b
//     if (a === b) return 0; // a equals b
// })

const greatestToLowest = [...numbers].sort((a, b) => {
    return b-a;
 })

console.log('numbers', numbers)
console.log('lowestToGreatest', lowestToGreatest)
console.log('greatestToLowest', greatestToLowest)

// String example

const words = ['b', 'a', 'Third', 'Second', 'Hello', 'Goodbye', 'First', 'AA', 'A'];

// words.sort(function (a, b) {
//   if (a.length < b.length) return -1; //  1 here (instead of -1 for ASC)
//   if (a.length > b.length) return 1; // -1 here (instead of  1 for ASC)
//   if (a.length === b.length) return 0;
// });

const sortedWords = [...words].sort((a,b) => a.localeCompare(b))

const reversedWords = [...words].reverse()
console.log('words', words);
// console.log('sortedWords', sortedWords)
console.log('reversedWords', reversedWords)