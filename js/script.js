'use strict';

let startingPrice = Number(prompt("What's the starting price of the product($)?"));
let discountValue = Number(prompt("What's the discount(%)?"));

let discountedPrice;

if (!isNaN(startingPrice) && !isNaN(discountValue) && startingPrice > 0 && discountValue > 0 && discountValue <= 100) {
    discountedPrice = startingPrice - (discountValue / 100 * startingPrice);
    alert("The starting price is: " + startingPrice + " pounds, disocunt: " + discountValue + "%. Discounted price: " + discountedPrice + " pounds.");
} else {
    alert("input error");
}



// console.log(startingPrice);