let likesCoffee = true;
let likesTea = true;
let likeSnakes = false;
let likesDogs = true;

console.log(likesCoffee || likesTea)
console.log(likesTea || likeSnakes)

console.log(likesCoffee && likesTea)
console.log(likesTea && likeSnakes)
console.log(likesDogs && likesCoffee)

console.log(!likesCoffee)
console.log(!likesTea)


// Boolean example
if(likesCoffee && likesTea){
    console.log("Send coffee and tea advertisements!")
}
else if(likesCoffee){
    console.log("Send coffee advertisements")
}
else if(likesTea){
    console.log("Send tea advertisements")
}
else {
    console.log("No advertisements")
}


// Number example

const age = 18;
 
if (age <= 16) {
  console.log('You have a teenager discount.');
} else if (age >= 65) {
  console.log('You have a senior citizen discount :)');
} else {
  console.log("Sorry, you don't have any discount :(");
}

// String example

// const characterName = "Ned";
// let house = '';
 
// if (characterName === 'Khal Drogo') {
//   house = 'Dothraki Horselord';
// } else if (characterName === 'Daenerys') {
//   house = 'Targaryen';
// } else if (characterName === 'Jon Snow' || characterName === 'Sansa' || characterName === 'Arya' || characterName === 'Ned') {
//   house = 'Stark';
// } else if (characterName === 'Cersei' || characterName === 'Tyrion' || characterName === 'Ser Jaime') {
//   house = 'Lannister';
// } else {
//   house = 'Other';
// }
 
// console.log(`Your favorite character is from the house ${house}.`);

const houseName = "Podrick";
let house = '';
 
switch (houseName) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    house = 'Targaryen';
    break;
  case 'Jon Snow':
  case 'Sansa':
  case 'Arya':
    house = 'Stark';
    break;
default:
        house = 'other';
}
 
console.log(`Your favorite character is from the house ${house}.`);

// For loop example

let j = 10;

// for(let i = 0; i < j; i++){ // i++ -> i = i + 1;
// i = 3; r = 1
// i = 4; r = 0
//     if(i%2 === 0){ // i%2 evaluates the remainder of i/2
//         console.log('Even number' , i)
//     }
//     else{
//         console.log('Odd number', i);
//     }  
// }

 // what else can you use other than i++

 for(let i = 9; i > -1; i--){ // i-- -> i = i - 1
    console.log(i)
 }
 // in which scenario do you use the for loop

 let hobbies = ["kickboxing", "hiking", "meditation", "jiu Jitsu", "basketball"]; // Array

//  for(let i = 0; i < hobbies.length; i++){
//     if(hobbies[i] === "Kickboxing" || hobbies[i] === "Jiu Jitsu"){
//         console.log(`Combat sport ${hobbies[i].toUpperCase()} has ${hobbies[i].length} characters `)
//     }
//     else {
//         console.log("Non combat sport", hobbies[i].repeat(2));
//     }
//  }

for(let i = 0; i < hobbies.length; i++){
    console.log(`${hobbies[i][0].toUpperCase()}${hobbies[i].slice(1)}`)
}

 let example = "New York" // --> ["N","e","w", " ", "Y", "o","r", "k"]
 console.log(example.length)
 console.log(example[0], example[7])