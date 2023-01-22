const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout 
}); // this is a simple way to create user interface 

let computerGuess = Math.floor(Math.random() * 100)
let guess;
 // this is the number that we will try to guess!

let recursiveAsyncReadLine = function () {
    readline.question("Guess the number from 1 - 100: ", number => {
        let guess = Number(number);
        if (100 >= guess && guess >= 0) {
            if (guess === computerGuess) {
                console.log("That's right! It's too ez! You are the champion! Excellent !!!");
                return readline.close();
            } else if (guess > computerGuess) {
                console.log("Nah, that's too high :( Sorry, Try Again!");
                recursiveAsyncReadLine()
            } else if (guess < computerGuess) {
                console.log("Nah, that's too low :( Sorry, Try Again!");
                recursiveAsyncReadLine()
            } 
        } else {
            console.log("Wrong Input! Try Again!");
            recursiveAsyncReadLine()
        }
})
} // this is a function to ask the question to guess the number
recursiveAsyncReadLine()

