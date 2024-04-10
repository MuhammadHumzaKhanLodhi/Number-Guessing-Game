#! /usr/bin/env node
import inquirer from "inquirer";
//1) Computer will generate a random number
const randomNumber = Math.floor(Math.random() * 10 + 1);
//2) User input for guessing number
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number betweeen 1-10:",
    }
]);
//3) Campare user input with computer generated number and show result
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Conratulations! you guessed the right number");
}
else {
    console.log("You guessed the wrong number");
}
;
