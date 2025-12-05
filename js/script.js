'use strict';

let a = prompt("Please enter first number:");

Number(a) === 0 ? console.log("Вірно") : console.log("Неправильно");
Number(a) > 0 ? console.log("Вірно") : console.log("Невірно");
Number(a) < 0 ? console.log("Вірно") : console.log("Невірно");
Number(a) >= 0 ? console.log("Вірно") : console.log("Неправильно");
Number(a) <= 0 ? console.log("Вірно") : console.log("Неправильно");
Number(a) !== 0 ? console.log("Вірно") : console.log("Невірно");
a === "test" ? console.log("Вірно") : console.log("Неправильно");
a === "1" && (typeof a) === "string" ? console.log("Вірно") : console.log("Невірно");
Number(a) > 0 && Number(a) < 5 ? console.log("Вірно") : console.log("Невірно");

if (Number(a) === 0 || Number(a) === 2) {
    a = +a + 7;
    console.log(a);
} else {
    a = +a / 10;
    console.log(a);
};

const b = Number(prompt("Please enter second number:"));

(a <= 1) && (b >= 3) ? console.log(a + b) : console.log(a - b);
(a > 2 && a < 11) || (b >= 6 && b < 14) ? console.log("Вірно") : console.log("Невірно");

const num = Number(prompt("Please enter season number:"));
let result = "";
switch (num) {
    case 1:
        result = "Зима";
        break;
    case 2:
        result = "Весна";
        break;
    case 3:
        result = "Літо";
        break;
    case 4:
        result = "Осінь";
        break;
    default:
        "Season";
}
console.log(result);