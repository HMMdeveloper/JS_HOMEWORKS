'use strict';

const products = [
    { id: 31, name: "Mouse", price: 25, inStock: true },
    { id: 2, name: "Keyboard", price: 70, inStock: false },
    { id: 3, name: "Monitor", price: 210, inStock: true },
];

const stringsOfProducts = products.map(item => {
    let result = item.name + ": $" + item.price;
    if (item.inStock === false) {
        result += " (out of stock)";
    }
    return result;
});

console.log(stringsOfProducts);