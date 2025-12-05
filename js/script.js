'use strict';

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
};

const rate = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    console.log(dollars * rate);
};

const N = parseInt(prompt("Please enter first number:"));
for (let i = 1; i <= 100; i++) {
    if ((i * i) <= N) {
        console.log(i);
    };
};

const simpleNumber = parseInt(prompt("Please enter second number:"));
let isSimple = true;

if (simpleNumber <= 1) {
    isSimple = false;
} else {
    for (let i = 2; i * i <= n; i++) {
        if (simpleNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isSimple ? "The number is Simple." : "Number is not Simple.");

const degreeOfThree = parseInt(prompt("Please enter third number:"));

if (degreeOfThree < 1) {
    console.log("Can not");
} else {
    while (degreeOfThree % 3 === 0) {
        degreeOfThree /= 3;
    }
    console.log(degreeOfThree === 1 ? "Can" : "Can not");
};