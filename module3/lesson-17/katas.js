// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
// Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
// and returns the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, availableIngredients){

// 1. Check if ingredients in the recipe are available in the available
//   1.a if true then move on to the next part
        // Access the values of the keys
        // See how many times the ingredients can be made of the recipe
 // Use the for loop to access each key of the keyRecipe
 // since they have the same name as keyIngredients --> keyIngredients[key]
 let maxCakes = [];
 for(let key in recipe){
    if(!availableIngredients[key]){
      return 0;
    }
    maxCakes.push(Math.floor(availableIngredients[key]/recipe[key]))
 }
 
 return Math.min(...maxCakes);
//
}
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 