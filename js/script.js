'use strict';

let usersAge = parseFloat(prompt("Please, enter your age:"));

if (isNaN(usersAge)) {
    alert("Age is not defined.");
} else if (usersAge < 18) {
    let adultPermission = confirm("Your age is under 18. Is there any adult, who allows you to watch it?");
    if (adultPermission === true) {
        alert("Access is allowed by an adult.");
    } else {
        alert("Access is not allowed.");
    }
} else if (usersAge >= 18) {
    alert("Access is allowed, Enjoy your time here!");
}