'use strict';

const user = {
    name: "Pete",
    age: 23,
    email: "peterpalahin@gmail.com",
    isSubscribed: true,
    balance: "150.25",
    verified: "1"
};

const balance = +user.balance;
const verified = !!user.verified;

let access;

if (user.age < 18) {
    access = "Access restricted due to age.";
} else {
    access = user.verified && (user.isSubscribed || +user.balance > 0);
};

const strictAge = user.age === String(user.age);
const notStrictAge = user.age == String(user.age);

console.log(access, strictAge, notStrictAge);