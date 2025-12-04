'use strict';

const user = {
    access: true
};

const order = {
    isPaid: false,
    total: 120
};

const system = {
    fontSize: 14,
    lang: "en",
    balance: 200
};

let userAllowed = false;
let orderAllowed = false;
let systemAllowed = false;

if (user.access === true) {
    userAllowed = true;
};

if (order.isPaid === true || system.balance >= order.total) {
    orderAllowed = true;
};

if (system.fontSize > 12 && (system.lang === "en" || system.lang === "uk")) {
    systemAllowed = true;
};

let finalAccess = false;

if (userAllowed && orderAllowed && systemAllowed) {
    finalAccess = true;
};

if (finalAccess) {
    console.log("Full access granted");
} else {
    console.log("Access denied");

    if (!userAllowed) console.log("Blocked by: user");
    else if (!orderAllowed) console.log("Blocked by: order");
    else if (!systemAllowed) console.log("Blocked by: system");
};