// app.js
const bcrypt = require('bcryptjs'); // importing the bcrypt package
const saltRounds = 10; // iLoveJavascript --> yguygaudadyv --> 8rigfwibfiwfih3 -->....
 
const plainPassword1 = 'HelloWorld'; // ---> vihfuohdiuedliahefiuw
const plainPassword2 = 'helloworld';
 
const salt = bcrypt.genSaltSync(saltRounds);
 
console.log(`Salt => ${salt}`); // -->79yfvbog83
 
const hash1 = bcrypt.hashSync(plainPassword1, salt);
// // input -> bcrypt(input) -> salt + hashedPassword -> 79yfvbog83vihfuohdiuedliahefiuw
const hash2 = bcrypt.hashSync(plainPassword2, salt);
 
const verifyPass1 = bcrypt.compareSync(plainPassword2, hash1); // --> true/false
// const verifyPass2 = bcrypt.compareSync('some wrong password', hash2);
 
console.log(`Hash 1: ${hash1}`);
console.log(`Hash 2: ${hash2}`);
// console.log('----------------------------------------');
// console.log(`Is plainPassword1 corresponding to the created hash1: ${verifyPass1}`);
// console.log(`Is plainPassword2 corresponding to the created hash2: ${verifyPass2}`);