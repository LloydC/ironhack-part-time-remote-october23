// Exercise 1
// Create a class Human with properties name, gender, age, calories
// Add a method eatFood(food) to class Human that increases the number of calories for a human accordingly to the food's
// protein, carbs and fat properties
// Be sure to test those methods on the instances you created earlier to make sure they work

class Human {
    constructor(name, gender, age, calories){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.calories = calories
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
}

const firstHuman = new Human("John Doe", 34, "male", 1000);
const firstFood = new Food( "Alloco", 0, 100, 50);
firstHuman.eatFood(firstFood)
console.log('firstHuman', firstHuman)
console.log('firstFood', firstFood)
// Add a method printCalories() for classFood that prints out how many calories a specific food provides

// i.e: Eating banana will add 89 calories

// Create instances of each class and print them to the console to confirm they work

// Exercise 3
// Create a subclass Man from class Human, it should have it's gender set to 'male' automatically

// Exercise 4
// Create a subclass Woman from class Human, it should have it's gender set to 'female' automatically

// Create instances of each class and print them to the console to confirm they work