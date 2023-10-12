// .map() Array method example
const array = [1, 2, 3];
const secondArray = ["John", "Matt", "Stefan"]
 
const newArray = array.map(number => number * 2);
const secondNewArray = secondArray.map(firstName => "Mr. " + firstName)
 
console.log('newArray', newArray);
console.log('secondNewArray', secondNewArray)

// array of cities:
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const capCities = cities.map(cityName => cityName[0].toUpperCase() + cityName.slice(1))

console.log('capCities', capCities)

// Return the name and their finalExam Grade using map
const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];

  const studentFinalExams = students.map(student => {
    return {
        name: student.name,
        finalExam: student.finalExam
    }
  })

  console.log('studentFinalExams', studentFinalExams)

  // .filter() examples
const numbers = [1, 2, 3, 4, 5, 6];
 
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
 
console.log('evenNumbers',evenNumbers); 
console.log('oddNumbers', oddNumbers)

// Return student of drinking age --> greater than 20

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
  ];

//   const legalDrinkingPeople = people.filter(person => person.age >= 21)
const legalDrinkingPeople = people.filter(person => {
    return person.age >= 21;
})

  console.log('legalDrinkingPeople', legalDrinkingPeople)

  // Return the list of places that has a swimming pool

  const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];

  const placesWithAPool = places.filter(apartment => {
    // return apartment.pool === true;
    return apartment.pool;
  })
  const placesWithoutAPool = places.filter(apartment => {
    // return apartment.pool === true;
    return !apartment.pool;
  })

//   const placesWithWordApartment = places.filter(apartment => apartment.title.includes("Apartment") || apartment.title.includes("apartment"))
const placesWithWordApartment = places.filter(apartment => apartment.title.toLowerCase().includes("apartment"))

const placesCheaperThan500 = places.filter(apartment => apartment.price < 500)

  console.log('placesWithAPool', placesWithAPool)
  console.log('placesWithoutAPool', placesWithoutAPool)
  console.log('placesWithWordApartment', placesWithWordApartment)
  console.log('placesCheaperThan500', placesCheaperThan500)

// .reduce() examples

const numbersArray = [2, 3, 4, 6, 8];
 
// const total = numbersArray.reduce(function (accumulator, currentValue) {
//   console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
//   return accumulator + currentValue;
// });
 
const secondTotal = numbersArray.reduce((accumulator, currentValue) => {
    console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
    return accumulator + currentValue;
  }, 10); // <= notice the 23!!!
   
// console.log('total is: ', total);
console.log('secondTotal is: ', secondTotal);

// return the average age of the class of students

const studentClass = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
  ];


  const sumOfAges = studentClass.reduce((accumulator, student) => {
    return accumulator + student.age
  }, 0)

//   console.log('sumOfAges', sumOfAges)
console.log('averageStudentAge', sumOfAges/studentClass.length)

const product = {
    name: 'AmazonBasics Apple Certified Lightning to USB Cable',
    price: 7.99,
    manufacturer: 'Amazon',
    reviews: [
      { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
      { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
      { user: 'David Recoba', comments: 'Awesome', rate: 5 },
      { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
      { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
    ]
  };

  const totalReviews = product.reviews.reduce((acc, review) => {
    return acc + review.rate;
  }, 0); // starts acc to 0
  const averageRate = totalReviews / product.reviews.length;
   
  console.log(`averageRate rate: ${averageRate}`); // <== averageRate rate:  3.2