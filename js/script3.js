'use strict';

const people = [
    { name: "Anna", age: 22 },
    { name: "Oleg", age: 31 },
    { name: "Maria", age: 27 }
];

const firstPersonName = people[0].name;
let oldest = people[0];

if (people[1].age > oldest.age) {
    oldest = people[1];
} else if (people[2].age > oldest.age) {
    oldest = people[2];
}

const ageSummary = {
    total: people[0].age + people[1].age + people[2].age,
    average: (people[0].age + people[1].age + people[2].age) / 3
}