'use strict';

const email = prompt("Please enter your email:").trim();
const trimmedEmail = email.trim();
const password = prompt("Please enter your password:").trim();
const trimmedPassword = password.trim();
const isEmailVerified = trimmedEmail === "usersName@email.com";
// Use usersName@email.com for login, could write just !!trimmedEmail
// But thought this code would be prettier


const canLogin = trimmedEmail.length > 0 && trimmedPassword.length > 0 && isEmailVerified;

if (canLogin === true) {
    console.log("Login success.")
} else {
    console.log("Login failed.")
};