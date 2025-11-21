'use strict';

let usersName = prompt("Please enter your name:", "User");

let greetings = confirm("Do you want to see greetings?");

if (greetings) {
    alert("Hello, " + usersName + "! How are you?");
} else { };
