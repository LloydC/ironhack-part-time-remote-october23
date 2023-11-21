const colors = require('@colors/colors');// import/load the package 
const test = 873

console.log(colors.green(`hello ${test}`)); // outputs green text
console.log(colors.red.underline('i like cake and pies'));
console.log(colors.yellow('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!'));