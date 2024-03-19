// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged 
// to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// Brice approach
// 1. Transform the strings into arrays, sort them
// 2. Compare the different character's index positions values

// Burak's approach

function scramble(str1, str2) {
    // 3. Declare a variable which is true initially but can be changed to false under special conditions
    let hasCharacters = true;
    // 1. Transform the strings into arrays 
    const array1 = str1.split("")
    const array2 = str2.split("")
// 2. Looping over the second array and use the ".includes" function, "charAt"
    for(let i=0; i < array2.length; i++){
        if(array1.includes(array2[i])){
            // remove the character from both arrays 
            // 1. Find current character in array1 --> use indexOf to find the index of the current character
            const characterIndex = array1.indexOf(array2[i]);
            // 2. Remove it --> use splice() to remove it
            // 4. Use a "splice" function to remove the characters after checking its there for both arrays 
            array1.splice(characterIndex, 1)
            //continue the loop
        }
        else {
            hasCharacters = false;
            break;
        }
    }
    return hasCharacters;   
}
console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))

// Optimized solution

// function scramble(str1, str2) {
//     const charCounter = {};
  
//     for (const char of str1) {
//       charCounter[char] = (charCounter[char] || 0) + 1;
//     }
    
//     for (const char of str2) {
//       if (!charCounter[char]) {
//         return console.log(false);
//       } else {
//         charCounter[char]--;
//       }
//     }
//     console.log("charCounter", charCounter);
//     return console.log(true);
//   }
//     }
// Ivan's approach
// 1. Transform the strings into objects




// i.e:

//  ==> True
// scramble ==> True
// scramble('katas', 'steak') ==> False
