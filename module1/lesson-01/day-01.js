// Variables
let firstName = "Jon"; // "" '' String
let lastName = "Chambrier"; // String

firstName = "Lloyd"

// let fullName = firstName + " " +lastName;
let fullName = `${firstName} ${lastName}` // Template literals syntax

console.log(fullName)
const age = 33; // Number
const email = "lloydchambrier@gmail.com";

let isMarried = false; // Boolean
let likesCoffee = true; // Boolean

let hobbies = ["Kickboxing", "Hiking", "Meditation"]; // Array
console.log(hobbies[0])
console.log(hobbies[2])

let ageRanges = [18, 21, 32, 44]; // Array

const favoriteBook = {
    bookName: "The Art Of War",
    author: "Sun Tzu",
    pages: 98,
    genres: ["Strategy", "Management", "Leadership"]
}; // object

console.log(favoriteBook.bookName)
console.log(favoriteBook["author"])

let test; // undefined
// test = "Hey"
// test = 98
// test = [true, false, true]

// console.log(lastName.length)// print the firstName variable

if(firstName.length > 4){
    console.log("First Name has more than 4 characters")
}
else{
    console.log("First Name has less than 4 characters")
}