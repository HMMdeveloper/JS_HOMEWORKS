'use strict';

const newArr = [1, 2, 3, [4, 5, [6]]];

function myFlat(arr) {
    if (arguments.length !== 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }

    const result = [];

    function flatFunction(innerArr) {
        for (const item of innerArr) {
            if (Array.isArray(item)) {
                flatFunction(item);
            } else {
                result.push(item);
            }
        }
    }
    flatFunction(arr);

    return result;
};

console.log(myFlat(newArr));