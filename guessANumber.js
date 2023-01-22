const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
}); // this is a simple way to create user interface 


let computerGuess = Math.floor(Math.random() * 100)
let guess;
let guessCount = 0;
// this is the number that we will try to guess


let recursiveAsyncReadLine = function () { // creating level 1
    readline.question("Guess the number from 1 - 100: ", number => { // creating a question
        let guess = Number(number);
        if (100 >= guess && guess >= 0) {
            if (guess === computerGuess) { // if you guess correctly
                console.log("That's right! It's too ez! You are the champion! Excellent !!!");
                console.log("Congrats you have reached Level 2! Good Luck!");
                return recursiveAsyncReadLine2()

            } else if (guess > computerGuess) { // if the number is too high
                console.log("Nah, that's too high :( Sorry, Try Again!");
                recursiveAsyncReadLine()
            } else if (guess < computerGuess) { // if the number is too low
                console.log("Nah, that's too low :( Sorry, Try Again!");
                recursiveAsyncReadLine()
            }
        } else { // if its not in the range or NaN
            console.log("Wrong Input! Try Again!");
            recursiveAsyncReadLine()
        }
    })
} // this is a function to ask the question to guess the number
recursiveAsyncReadLine()

let computerGuess2 = Math.floor(Math.random() * 200)
let guess2;

let recursiveAsyncReadLine2 = function () { // creating level 2 
    readline.question("Guess the number from 1 - 200: ", number => { // creating a question
        let guess2 = Number(number);
        if (200 >= guess2 && guess2 >= 0) {

            if (guess2 === computerGuess2) { // if you guess correctly
                console.log("That's right! It's too ez! You are the champion! Excellent !!!");
                console.log("Congrats you have reached Level 3! Good Luck! ");
                return recursiveAsyncReadLine3()

            } else if (guess2 > computerGuess2) { // if the number is too high
                console.log("Nah, that's too high :( Sorry, Try Again!");
                recursiveAsyncReadLine2()

            } else if (guess2 < computerGuess2) { // if the number is too low
                console.log("Nah, that's too low :( Sorry, Try Again!");
                recursiveAsyncReadLine2()
            }

        } else { // if its not in the range or NaN
            console.log("Wrong Input! Try Again!");
            recursiveAsyncReadLine2()
        }
    })
} // this is a function to ask the question to guess the number
recursiveAsyncReadLine2()

let computerGuess3 = Math.floor(Math.random() * 300);
let guess3;


let recursiveAsyncReadLine3 = function () { // creating level 3
    readline.question("Guess the number from 1 - 300: ", number => { // creating a question
        let guess3 = Number(number);
        if (300 >= guess3 && guess3 >= 0) {

            if (guess3 === computerGuess3) { // if you guess correctly
                console.log("That's right! It's too ez! You are the champion! Excellent !!!");
                console.log("You just won the game!! You are amazing!");
                return readline.close();

            } else if (guess3 > computerGuess3) { // if the number is too high
                console.log("Nah, that's too high :( Sorry, Try Again!");
                recursiveAsyncReadLine3()

            } else if (guess3 < computerGuess3) { // if the number is too low
                console.log("Nah, that's too low :( Sorry, Try Again!");
                recursiveAsyncReadLine3()
            }
        } else { // if its not in the range or NaN
            console.log("Wrong Input! Try Again!");
            recursiveAsyncReadLine3()
        }
    })
} // this is a function to ask the question to guess the number
recursiveAsyncReadLine3()