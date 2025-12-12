'use strict';

const arr = ["dog", "cat", , "cow"];
const str = "elephant";

function myIndexOf(target, element, searchStart = 0, callback) {
    const length = target.length;
    let start = searchStart >= 0 ? searchStart : length + searchStart;
    if (start < 0) start = 0;
    for (let i = start; i < length; i++) {
        if (callback(i) === element) {
            return i;
        }
    }
    return -1;
}

console.log(myIndexOf(arr, "cow", 2, i => arr[i]));
console.log(myIndexOf(str, "n", 2, i => str[i]));