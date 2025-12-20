'use strict';

const users = [
    { id: 1, age: 17, active: true, email: "a@mail.com" },
    { id: 2, age: 22, active: true, email: "b@spam.com" },
    { id: 3, age: 30, active: false, email: "c@mail.com" },
    { id: 4, age: 35, active: true, email: "d@mail.com" },
    { id: 5, age: 40, active: true, email: "e@mail.com" },
];

const filteredArr = users.filter(user =>
    user.active === true && user.age >= 18 && user.age <= 35 && !user.email.endsWith("@spam.com")
);
console.log(filteredArr);