'use strict';

const stringToChoose = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
    let randomString = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }
    return randomString;
}

const key = generateKey(16, stringToChoose);
console.log(key);