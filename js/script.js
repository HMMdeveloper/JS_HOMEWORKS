'use strict';

let ulObj = document.getElementsByTagName("li");
const ulArr = Array.from(ulObj);

for (const value of ulArr) {
    console.log(value);
};

// ----------------------------

console.log(ulArr.length);

// ----------------------------

function textArr() {
    const newArr = [];
    for (const value of ulArr) {
        newArr.push(value.textContent);
    };
    console.log(newArr);
}

textArr();