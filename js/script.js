'use strict';

function padString(string, stringLength, character, whichSide) {
    let firstStep = "";
    if (arguments.length < 4) {
        return console.log("Not enough arguments.")
    } else {
        if (whichSide === false) {
            firstStep = character += string;
        } else {
            firstStep = string += character;
        }
        return console.log(firstStep.substring(0, stringLength));
    }
};

padString("Hello", 7, "*", true);

// В начале условия просили вернуть все аргументы поэтому не понял
// как можно венуть без true как в конце в примере