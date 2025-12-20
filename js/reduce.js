'use strict';

const tx = [
    { id: 1, category: "food", amount: 12 },
    { id: 2, category: "food", amount: 8 },
    { id: 3, category: "taxi", amount: 15 },
    { id: 4, category: "books", amount: 20 },
    { id: 5, category: "taxi", amount: 7 }
];
// changed id to from m1 to 1, cause it was considered as a variable name

const reducedArr = tx.reduce((item, { category, amount }) => {
    item[category] = (item[category] || 0) + amount;
    return item;
}, {});

console.log(reducedArr);