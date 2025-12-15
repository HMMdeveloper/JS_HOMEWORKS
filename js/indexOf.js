'use strict';

const arr = ["dog", "cat", , "cow"];
const str = "elephant";

function myIndexOf(target, element, searchStart, callback) {
    const length = target.length;
    let start = searchStart >= 0 ? searchStart : length + searchStart;
    if (start < 0) start = 0;
    for (let i = start; i < length; i++) {
        if (callback(target, i) === element) {
            return i;
        }
    }
    return -1;
}

console.log(myIndexOf(arr, "cow", 2, (arr, i) => arr[i]));
console.log(myIndexOf(str, "n", 4, (str, i) => str[i]));

/**
 * Searches for the first occurrence of an element in an array-like or string target,
 * starting from a given index, using a callback to access each element.
 *
 * @param {(Array|string)} target
 * The array or string to search in.
 *
 * @param {*} element
 * The value to search for.
 *
 * @param {number} searchStart
 * The index at which to begin the search. Can be negative to indicate an offset from the end.
 *
 * @param {function((Array|string), number): *} callback
 * A function that returns the value at the specified index of the target.
 *
 * @returns {number}
 * The index of the first matching element, or -1 if the element is not found.
 */
