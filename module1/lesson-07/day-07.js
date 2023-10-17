// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  const aRectangle = new Rectangle(10, 8);
  const bRectangle = new Rectangle(5, 5)

  console.log('aRectangle', aRectangle)
  console.log('bRectangle', bRectangle)

  // Student
  // name
  // age
  // city
  // course
  class Student { // Parent class
    constructor(name, age, city, course){
        this.name = name;
        this.age = age;
        this.city = city;
        this.course = course;
        this.isEnrolled = true;
    }

    greet(){
        console.log(`My name is ${this.name}, I currently live in ${this.city}`)
    }

    location(){
        console.log(`I live in ${this.city}`)
    }

    eats(food) {
        console.log(`I like to eat ${food}`)
    }

    updateEnrollment(currentStatus){
        this.isEnrolled = currentStatus;
    }
  }


  class HistoryStudent extends Student { // Child class
    constructor(name, age, city, semester){
        super(name, age, city, 'history');//  parent Student() constructor
        //this.name
        // this.age
        // this.city
        // this.city
        //eats()
        this.semester = semester;
    }

    location(){
        console.log(`Since ${this.semester}, I study in ${this.city}`)
    }

    sayEnrollmentYear(){
        console.log(`My name is ${this.name} and I'm enrolled since ${this.semester}`)
    }
  }

  const firstStudent = new Student('Chris', 25, 'Abidjan', ['Web Development'])
  const secondStudent = new Student('Adam', 33, 'London', ['Web Development'])

  const firstHistoryStudent = new HistoryStudent('Joseph', 23, 'Oxford', 'Fall 2023');
//   console.log('firstHistoryStudent', firstHistoryStudent)
//   firstHistoryStudent.greet()
//   firstHistoryStudent.sayEnrollmentYear()

  firstStudent.location()
  firstHistoryStudent.location()
//   firstStudent.greet();
//   secondStudent.greet();

//   firstStudent.location()

//   firstStudent.eats('Alloco')
//   secondStudent.eats('Shamshuka')
// console.log('firstStudent', firstStudent)
// console.log('secondStudent', secondStudent)
// secondStudent.updateEnrollment(false);
// console.log('secondStudent', secondStudent)