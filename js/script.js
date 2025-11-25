'use strict';

const usersName = prompt("Please enter your name:");
const usersAge = prompt("Please enter your age:");
const usersCity = prompt("Please enter city where you live:");
let doYouLikeJs = prompt("Do you like JavaScript(Yes/No)?");
let usersAttitude;

if (doYouLikeJs === "Yes" || doYouLikeJs === "yes" || doYouLikeJs === "YES") {
    doYouLikeJs = !!doYouLikeJs;
    usersAttitude = "You like JS!";
} else {
    doYouLikeJs = "";
    doYouLikeJs = !!doYouLikeJs;
    usersAttitude = "You don't like JS";
};



alert(`Hi, ${usersName}! You're ${usersAge} and you're from ${usersCity}. Your attitude towards JavaScript: ${usersAttitude}`);

console.log(doYouLikeJs, typeof doYouLikeJs);