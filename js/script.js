'use strict';

const user = {
    firstName: "Jhon",
    lastName: "Doe",
    sayHi() {
        console.log(this);
        console.log("Hello " + this.firstName);
    }
}
user.sayHi();

function getFullName() {
    return `${this.firstName} ${this.lastName}`;
}

function wireContext(context, func, restArgs) {
    context.tempFunc = func;
    const result = restArgs?.length ? context.tempFunc(...restArgs) : context.tempFunc();
    delete context.tempFunc;

    return result;
}

function callFunction(context, func, ...restArgs) {
    return wireContext(context, func, restArgs);
}

console.log(callFunction(user, getFullName));

// ----------------------------

function applyFunction(context, func, argsArr) {
    return wireContext(context, func, argsArr)
}

console.log(applyFunction(user, getFullName))

// ----------------------------

function bindFunction(context, func, ...restArgs) {
    return function (...innerRestArgs) {
        return wireContext(context, func, restArgs.concat(innerRestArgs))
    };
}

const bindedFunc = bindFunction(user, getFullName);

console.log(bindedFunc());