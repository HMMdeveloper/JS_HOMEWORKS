'use strict';

const User = {
    _firstName: "",
    _lastName: "",
    createdAt: new Date(),

    get fullName() {
        const yourName = `${this._firstName} ${this._lastName}`;
        return yourName;
    },

    set fullName(name) {
        if (typeof name !== "string") throw new Error("Name must be a string")
        const splittedName = name.trim().split(/\s+/);
        if (splittedName.length !== 2) throw new Error("Name must contain two words")
        this._firstName = first;
        this._lastName = last;
        const [first, last] = splittedName;
        if (first.length < 2 || last.length < 2) throw new Error("Each word must contain at least two letters")
    },
    lockProfile() {
        Object.seal(this);
    }
}

Object.defineProperty(User, "_firstName", {
    writable: true,
    enumerable: false,
    configurable: true,
})

Object.defineProperty(User, "_lastName", {
    writable: true,
    enumerable: false,
    configurable: true,
})

Object.defineProperty(User, "createdAt", {
    writable: false,
    enumerable: true,
    configurable: false,
})

Object.defineProperty(User, "fullName", {
    writable: true,
    enumerable: true,
    configurable: false,
})

console.log(Object.keys(User));

User.lockProfile();

console.log(Object.isSealed(User));

User.newProp = 123;
delete User.fullName;