'use strict';

const orders = [
    { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
    { id: 102, items: [{ sku: "B2", qty: 1 }] },
    { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];
// changed id to from c101 to 101, cause it was considered as a variable name

const foundItem = orders.find(order =>
    order.items.find(item => item.sku === "B2")
)

console.log(foundItem);