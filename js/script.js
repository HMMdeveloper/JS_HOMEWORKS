'use strict';

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positiveSumNum = arr.reduce((acc, num) => {
    if (num > 0) {
        acc.sum += num;
        acc.count++;
    }
    return acc;
}, { sum: 0, count: 0 });
console.log(positiveSumNum);

// ------------------------

const minElNum = arr.reduce(
    (acc, value, index) =>
        value < acc.min ? { min: value, index } : acc,
    { min: arr[0], index: 0 }
);

console.log(minElNum.min, minElNum.index);

// ------------------------

const maxElNum = arr.reduce(
    (acc, value, index) =>
        value > acc.max ? { max: value, index } : acc,
    { max: arr[0], index: 0 }
);

console.log(maxElNum.max, maxElNum.index);

// -------------------------

const negativeNum = arr.filter(num => num < 0).length;

console.log(negativeNum);

// -------------------------

const positiveOddNum = arr.filter(num => num > 0 && num % 2 !== 0).length;

console.log(positiveOddNum);

// -------------------------

const positiveEvenNum = arr.filter(num => num > 0 && num % 2 === 0).length;

console.log(positiveEvenNum);

// -------------------------

let positiveEvenSum = 0;
arr.forEach(num => {
    if (num > 0 && num % 2 === 0) positiveEvenSum += num;
});

console.log(positiveEvenSum);

// -------------------------

let positiveOddSum = 0;
arr.forEach(num => {
    if (num > 0 && num % 2 !== 0) positiveOddSum += num;
});

console.log(positiveOddSum);

// -------------------------

const positiveMultiply = arr.reduce((acc, num) => {
    if (num > 0) return acc * num;
    return acc;
}, 1);
console.log(positiveMultiply);

// --------------------------

const maxNum = arr.map(num => (num === (Math.max(...arr)) ? num : 0));

console.log(maxNum);