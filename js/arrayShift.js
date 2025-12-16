'use strict';

const arr = ["apple", "banana", "pear"];

function arrayShift(shiftedArray) {
    if (shiftedArray.length === 0) {
        return undefined;
    }
    const firstEl = shiftedArray[0];
    for (let i = 1; i < shiftedArray.length; i++) {
        shiftedArray[i - 1] = shiftedArray[i];
    }
    shiftedArray.length = shiftedArray.length - 1;
    return firstEl;
}

console.log(arrayShift(arr));
console.log(arr);