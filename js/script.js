'use strict';

const startingPrice = Number(prompt("What's the starting price of the product($)?"));
const discountValue = Number(prompt("What's the discount(%)?"));

if (!isNaN(startingPrice) && !isNaN(discountValue) && startingPrice > 0 && discountValue > 0 && discountValue <= 100) {
    let discountedPrice = startingPrice - (discountValue / 100 * startingPrice);
    alert("The starting price is: " + startingPrice + " pounds, disocunt: " + discountValue + "%. Discounted price: " + discountedPrice + " pounds.");
} else {
    alert("input error");
}



// console.log(startingPrice);