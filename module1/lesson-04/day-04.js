// Functions Advanced Examples

function eatDinner(callback) {
    // the word "callback" is just a placeholder
    // you can use any other word
    callback();
    console.log('Eating the dinner!');
   
}
   
function eatDessert() {
    console.log('Eating the dessert!');
}

function eatBreakfast() {
    console.log('Eating the breakfast :)');
}
   

// eatDinner(eatDessert);
eatDinner(eatBreakfast);

//////

function putShirt() {
    console.log('Putting on the shirt.');
  }
   
  function putSocks () {
    console.log('Putting on the socks.');
  }
   
  function putPants () {
    console.log('Putting on the pants.');
  }
   
  function putShoes () {
    console.log('Putting on the shoes.');
  }
   
   
  function getReadyForWork (callback1, callback2, callback3, callback4) {
    callback1();
    callback2();
    callback3();
    callback4();
    console.log("I'm ready to go to work!!!");
  }
   
   
  getReadyForWork(putShoes, putSocks, putPants, putShirt);

  //

  const makeQuaterlySum = (x, y) => x+y;


  function calculateVAT(callback, q1Income, q2Income){
    const income = callback(q1Income, q2Income);
    console.log('VAT value is', income * 0.21)
    return income * 0.21;
  }

  calculateVAT(makeQuaterlySum, 10000, 12000)

  ////
const studentsArr = ['anna', 'brian', 'chloe'];
 
// Loop over an array and print each element
studentsArr.forEach((el) => {
  console.log('Hello ' + el);
});

setTimeout( function () {
    console.log('I am anonymous function and I will execute after 2 seconds');
  }, 2000);


  ///////

  const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];

// Get the value of the first student’s name
// Get the age of the student named Sarah
console.log(students[0].name)


const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ],
    [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
    ],
    [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
    ],
    [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
    ]
  ];

// Retrieve the second “classroom” of students
console.log(classes[1])
// Retrieve the first name “Antonette”
console.log(classes[4][0].firstName)
// Retrieve the age 18
console.log(classes[1][3].age)
// Retrieve the last name “Beatty”
console.log(classes[4][4].lastName)

const classRoom = {
    teacher:  {
      firstName: 'Greg',
      lastName: 'Dach',
      age: 38,
      address: {
        street: "3085 Kelton Knolls",
        city: "Aldaside",
        state: "Maryland"
      }
    }
  };

  console.log(classRoom.teacher.age);