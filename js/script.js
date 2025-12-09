'use strict';

const initialArray = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log("Not valid number.");
    }
}

removeElement(initialArray, 3);
console.log(initialArray);