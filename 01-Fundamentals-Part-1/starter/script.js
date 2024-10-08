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
const now = 2037;
const ageThijmen = now - 1998;
const ageSarah = now - 2018;
console.log(ageThijmen, ageSarah);

console.log(ageThijmen * 2, ageThijmen / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

const firstName = "Thijmen";
const lastName = "Smart";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 99
console.log(x);

// comparison operators
console.log(ageThijmen > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const  isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// LECTURE 14. OPERATORS PRECEDENCE