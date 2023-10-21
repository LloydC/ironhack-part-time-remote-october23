// Exercise 1
// Create a class Human with properties name, gender, age, calories
// Add a method eatFood(food) to class Human that increases the number of calories for a human accordingly to the food's
// protein, carbs and fat properties
// Be sure to test those methods on the instances you created earlier to make sure they work

class Human {
    // const newHuman = new Human('Lloyd', 'male', 33, 1000, 'brown')
    constructor(name, gender, age, calories, eyesColor){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        this.eyesColor = eyesColor;
        this.nbOfLegs = 2;
    }

    introduction(){
        console.log(`Hi, I am ${this.name}, I have ${this.age} old and I am a ${this.gender}`)
    }

    eatFood(food){
        // const newCaloriesCount = 0;
        this.calories = this.calories + food.protein + food.carbs + food.fat;
    }
}
// Exercise 2
// Create a class Food with properties name, protein, carbs, fat
// Carbohydrates provides 4 calories per gram
// Protein provides 4 calories per gram
// Fat provides 9 calories per gram
class Food {
    constructor(name, protein, carbs, fat){
        this.name = name;
        this.protein = protein * 4;
        this.carbs = carbs * 4;
        this.fat = fat * 9;
    }
    // Add a method printCalories() for class Food 
    // that prints out how many calories a specific food provides
    printCalories(){
        let sum = this.protein + this.carbs + this.fat;
        console.log(`${this.name} has ${sum} calories`);
    }
}

const firstHuman = new Human("John Doe", 34, "male", 1000, 'brown');
const firstFood = new Food( "Alloco", 0, 100, 50);

console.log('firstHuman', firstHuman)
console.log('firstFood', firstFood)

firstHuman.eatFood(firstFood)
firstHuman.introduction()
firstFood.printCalories()

// i.e: Eating banana will add 89 calories

// Create instances of each class and print them to the console to confirm they work

// Exercise 3
// Create a subclass Man from class Human, 
// it should have it's gender set to 'male' automatically
class Man extends Human {
    constructor(name, age, calories, eyesColor){
        super(name, 'male', age, calories, eyesColor)
       
    }
}

const firstMan = new Man('Giovanni', 36, 1200, 'blue');
console.log('firstMan', firstMan);
firstMan.introduction();
// Exercise 4
// Create a subclass Woman from class Human, it should have it's gender set to 'female' automatically
class Woman extends Human {
    constructor(name, age, calories, eyesColor){
        super(name, 'female', age, calories, eyesColor)
       
    }
}

const firstWoman = new Woman('Beyonce', 42, 1200, 'brown');
firstWoman.eatFood(firstFood)
console.log('firstWoman', firstWoman)

// Create instances of each class and print them to the console to confirm they work