`use strict`;

// This is what the player will be guessing. It assigns a random integer between 1-20. 
// Math.random makes a random floating point between 0 and 1. We can multiply it by 20 to make the range higher, but must use Math.trunc if we want a whole number. 
// Adding 1 shifts the range from 0-19 to 1-20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Now we need to create our intial variables. We need a score and highscore.

let score = 20;
let highscore = 0;

// Now we will make a helper function for selecting and changing the text content so we do not repeat ourselves.

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// The above function takes a 'message' as its input parameters. It then selects the HTMl element with the class named 'message' and the input message.

// Add an event listener to the HTML class for the check button. 

document.querySelector(`.check`).addEventListener('click', function () {
    //This line will get the user's guess and assign it to a variable.
    const guess = Number(document.querySelector(`.guess`).value);


    //If there is no guess, we will alert the player.
    if (!guess) {
        displayMessage(`No number!`);

        // If the player gets the number right, change the message and background color.   
    } else if (guess === secretNumber) {
        displayMessage(`Correct number!`);
        document.querySelector(`.number`).textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;
        // Change the players high score
        if (score > highscore) {
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
        };
        // If the player's guess is wrong, then tell the player if it is too high or too low. 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `Too High!` : `Too low!`);
            //Each time they guess wrong, the score will be incremented by one. 
            score--;
            document.querySelector('.score').textContent = score;
            // If the score goes below 1, then the player will lose the game.
        } else {
            displayMessage(`You lost the game :( `);
            document.querySelector(`.score`).textContent = 0;

        }
    }
});

// Now we will add an event listener to the reset button to reset the game if the player wants to play again.

document.querySelector(`.again`).addEventListener(`click`, function () {
    // Reset the score and secret number
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //Reset the message and text that shows the answer
    displayMessage('Start guessing...');
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = '?';
    document.querySelector(`.guess`).value = '';

    //Reset styles
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector('.number').style.width = `15rem`;

})