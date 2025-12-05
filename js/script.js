'use strict';

const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (const value of arr) {
    sum += value;
};

console.log(sum);

let squareSum = 0;

for (const value of arr) {
    squareSum += Math.pow(value, 2);
};

console.log(squareSum);