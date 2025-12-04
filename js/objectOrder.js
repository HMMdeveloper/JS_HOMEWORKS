'use strict';

const order = {
    total: "950",
    currency: "$",
    isPaid: true,
    delivery: "no",
    priority: "0"
};

const total = +order.total;

let delivery;
if (order.delivery === "yes") {
    delivery = true;
} else {
    delivery = false;
};

let priority;
if (order.priority === "1") {
    priority = true;
} else {
    priority = false;
};

let isBigOrder;
if (numberTotal >= 1000) {
    isBigOrder = true;
} else {
    isBigOrder = false;
};

let description = "";

if (!order.isPaid) {
    description = "Order is not paid";
};

if (order.isPaid && delivery) {
    description = "Paid order with delivery";
};

if (order.isPaid && isBigOrder) {
    description = "High-value paid order";
};

if (order.isPaid && !delivery) {
    description = "Paid order without delivery";
};

if (priority) {
    description = description + " [PRIORITY]";
};

let looseComparison;
if (order.total == numberTotal) {
    looseComparison = true;
} else {
    looseComparison = false;
};

let strictComparison;
if (order.total === numberTotal) {
    strictComparison = true;
} else {
    strictComparison = false;
};