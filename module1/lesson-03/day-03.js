// create a student object with properties fullName, age, city, favoriteMeal, likesCoffee
const student1 = {
    fullName:"ensha",
    age:24,
    city:"Berlin",
    favoriteMeal:"Briyani",
    likesCoffee: true
}

let student2 = {
    fullName: "Chris",
    age: 22,
    city: "Belfort",
    favouriteMeal: "Rice & eggs",
    likesCoffee: true
    }

let student3 = { 
        fullName: "Tom Epstein", 
        age: 35, city: "Berlin", 
        favoriteMeal: "shakshuka" , 
        likeCoffee: true
}

let student4 ={
        fullName: "vitor Cruz",
        age:24,
        city:"setubal",
        favoriteFood:"bitoque",
        likesCoffee:true,    
}

let student5 = {
    fullName: 'Daniel Susetio',
    age: 36,
    city: 'Berlin',
    favoriteMeal: 'Sushi', 
    likesCoffee: true
  };

student1.favoriteMeal = "Biriyani";

student1.favoriteSport = "Badmington"// add a new property
student1['likesTea'] = true; // add a new property

// console.log(Object.keys(student1)) // generate list of keys
// console.log(Object.values(student1)) // generate list of keys
for(let property in student1){
    console.log(student1[property])
    // if(property === 'favoriteSport'){
    //     console.log('student has a favorite sport')
    // }
    // else{

    // }

    // if(student[property] === "Biriyani"){
    //     console.log("student likes indian food")
    // }
}

const classOfStudents = [student1, student2, student3]
classOfStudents.push(student4)
classOfStudents.unshift(student5)

console.log("classOfStudents.length", classOfStudents.length)
console.log("classOfStudents", classOfStudents)

// Find all the students who live in Berlin

// 1. Use a for loop to go over the list of students
// 2. Create a conditional and using the property 'city' check if the value is Berlin
let berlinStudents = []

for(let i = 0; i < classOfStudents.length; i++){
    // if(classOfStudents[i].city === 'Berlin' || classOfStudents[i].city === 'berlin'){
    if(classOfStudents[i].city.toLowerCase() === 'berlin'){
        berlinStudents.push(classOfStudents[i]);
    }
}

berlinStudents.splice(2, 1)
console.log('berlinStudents', berlinStudents)

let phrase = "This is long enough for a string to count it words";

let words = phrase.split(" ");

console.log("words", words);

function sayHello(){ // function declaration
    return "Hello World :)";
}

console.log(sayHello())

function makeSum(a, b){

    return a + b;
}

console.log(makeSum(5, 7))

function printName(name) {
    console.log(`Name is ${name}.`);
}
   
const test = printName('Ana');
console.log("test", test)

// KISS Principle
// Keep
// It
// Simple
// Silly/Stupid

// Write a function that takes in a parameter "input" and returns the last character in that string
// i.e: "Rijksmuseum" ---> "m"

function lastChar(input){
    //returns the last character of "input"
    // let lastCharacter = input[input.length -1];
    return input[input.length -1];
}

// function firstChar(input){
//     return input[0]
// }

console.log(lastChar("Hello")) // ["H","e","l","l","o"] --> input.length = 5 , lastCharIndexPosition = 5 - 1 = 4
// console.log(firstChar("World"))

// Write a function that takes in one parameter "length" and prints out that many stars
// i.e: 3 ---> ***
function star(length){
    let starLength = "";

    for(let i = 0; i < length; i++){
        starLength += "*"
    }

    return starLength;
}

console.log(star(5))
console.log(star(7))


// Write a function that takes in two parameters "length" and "height" and prints out a rectangle of stars
// i.e: 3,2 ---> ***
//               ***
function starRectangle(length, height){

    let starLine = star(length);

    for(let i = 0; i < height ;i++){
        console.log(starLine)
    }
}

// function printStars (length, height) {
//     let starsLength = "";
//     for (i = 0; i < length; i++) {
//         starsLength += "*"
//     }
//     for (j = 0; j < height; i++) {
//         console.log (starsLength)
//     }
// }

starRectangle(3,2)
starRectangle(5,4)

// Write a function that takes in an array of integers and returns the average of the array
// i.e: [2,5,8] ---> 5
//      [1,2,3] ---> 2

let clientsList = [
    {
        name: 'John Doe',
        income2023: [2000,3000,4000,2000,3000,4000]
    },
    {
        name: 'Jane Doe',
        income2023: [2500,3500,4600,2700,8000,14000]
    }
    
]

function average(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i]; // sum = sum + array[i]
    }

    return sum/array.length; // 3
}

for(let i = 0; i < clientsList.length; i++){
    console.log(`${clientsList[i].name} average income is ${average(clientsList[i].income2023)}`)
}

// console.log(average([2,5,8]))
// console.log(average([1,2,3]))
