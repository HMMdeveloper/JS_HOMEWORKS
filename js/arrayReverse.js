'use strict';

const secondArr = ["fruit", "vegetables", "meat", "fish"];

function arrayReverse(reversedArr) {
    for (let i = 0, j = reversedArr.length - 1; i < (reversedArr.length / 2); i++, j--) {
        const change = reversedArr[i];
        reversedArr[i] = reversedArr[j];
        reversedArr[j] = reversedArr[i];
    }
    return reversedArr;
}

console.log(arrayReverse(secondArr)); 