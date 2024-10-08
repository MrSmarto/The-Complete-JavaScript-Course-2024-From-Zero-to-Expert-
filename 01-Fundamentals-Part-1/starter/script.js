/*

// LECTURE 09.

let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Thijmen");
console.log("23");

// een variabele is een box waar je voorwerpen in stopt. 
let firstName = "Klara";

console.log("firstName");
console.log("firstName");
console.log("firstName");

// functies mogen alleen cijfers, letters, onderstrepingstekens of dollertekens bevatten. De rest is illegaal
let thijmen_klara = "TK";

// some function names are reserved like: function & new
let $function = "27";

// use lowercase letters
let person = "thijmen"

// constante functies hebben een andere kleur en worden herkend. Ook zijn die in caps.
let PI = 3.1415;

// geef variabelen altijd een logische naam.
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer"; 
let job2 = "teacher";

console.log(myFirstJob);



// LECTURE 11.

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Thijmen');

// Dynamic typing > a variable getting a new value
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

*/

// LECTURE 12. let, const and var

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// var job = "programmer";
// job = "teacher";

// lastName = "Smart";
// console.log(lastName);


// LECTURE 13. OPERATORS

// math operators
// const now = 2037;
// const ageThijmen = now - 1998;
// const ageSarah = now - 2018;
// console.log(ageThijmen, ageSarah);

// console.log(ageThijmen * 2, ageThijmen / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

// const firstName = "Thijmen";
// const lastName = "Smart";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 99
// console.log(x);

// // comparison operators
// console.log(ageThijmen > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const  isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);


// LECTURE 14. OPERATORS PRECEDENCE

// const now = 2037;
// const ageThijmen = now - 1998;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// let x, y; 
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageThijmen + ageSarah) / 2
// console.log(ageThijmen, ageSarah, averageAge);

// LECTURE 17. STRINGS and TEMPLATE LITERALS

// const firstName = "Thijmen";
// const job = "Designer";
// const birthYear = 1998;
// const year = 2037;

// const thijmen = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"; 
// console.log(thijmen);

// // template literal -- backticks
// const thijmenNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(thijmenNew);

// // backticks
// console.log(`just a regular string...`)

// // oude versie
// console.log('String with \n\
// multiple \n\
// lines')

// // backticks
// console.log(`String
// multiple
// lines`);

// // LECTURE 18. IF/ELSE STATEMENTS

// const age = 15;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//     console.log(`Sarah can start driving license`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`)
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//     century = 20;

// } else {
//     century = 21;
// }
// console.log(century);

// // LECTURE 20. TYPE CONVERSION AND COERCION

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Thijmen'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`I am ` + `23` + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` * `2`);
console.log(`23` / `2`);


let n = `1` + 1; // 11 (1 string + 1)
n = n - 1; // 11 - 1
console.log(n); // = 10

let x = 2+3+4+`5`
console.log(x); // = 95 | 2 + 3 = 5 = 4 = 9 plak "5" eraan

let y = `10` - `4` - `3` - 2 + `5`
console.log(y); // = 15 | 10 - 4 = 6 - 3 = 3 - 2 = 1 plak 5 eraan


