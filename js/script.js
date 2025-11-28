'use strict';

let usersAge = Number(prompt("Please, enter your age:"));

if (isNaN(usersAge) || usersAge <= 0) {
    alert("Wrong age.");
} else {
    alert(`In 5 years you'll be ${usersAge + 5} years old.`)
}

// ---

const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";

console.log(`"120.50$" -> parseInt: ${parseInt(price1)}, parseFloat: ${parseFloat(price1)}`);
// Повертають числа бо перший символ в строці - число, парсІнт не повертає після крапки, бо повертає тільки цілі числа. 

console.log(`"UAH 999" -> parseInt: ${parseInt(price2)}, parseFloat: ${parseFloat(price2)}`);
// Поіертають НаН, бо перший символ строки U - неможливо конвертувати в число.

console.log(`"180cm" -> parseInt: ${parseInt(height)}, parseFloat: ${parseFloat(height)}`);
// Повертає 180, бо ці символи перші в строці, та є числом, см не повертає бо неможливо конвертувати в число.

console.log(`"abc123" -> parseInt: ${parseInt(broken)}, parseFloat: ${parseFloat(broken)}`);
// Повертає НаН, бо перший символ строки a - неможливо конвертувати в число.