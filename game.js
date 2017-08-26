//the array that holds the possibilites of the computers guesses
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//these variables initiate at the start of the game
var wins = 0,
    losses = 0,
    guesses = 9,
    guessedLetter = [],
    compGuess = null,
    userGuess = null,
    //This line chooses which letter is chosen by the computer
    compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];


//this function starts the game on key up
document.onkeydown = function(event) {

    //I have assigned my any key press to userGuess
    userGuess = event.key;

    //functino for game win
    function gameWin() {
        wins++;
    }

    //function for a wrong guess
    function wrongGuess() {
        guesses--;
    }

    //function for game loss
    function gameLoss() {
        losses++;
    }

    function gameReset() {
        compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
        guesses = 9;
        guessedLetter = [];
    }

    //if the user inputs a value that is already inside of the guessedLetter array then this if statement returns false and does not

    if ((event.keyCode >= 65 && event.keyCode <= 90) && (guessedLetter.indexOf(userGuess) === -1)) {

        //this adds the users guess to a list of missed guesses
        guessedLetter.push(userGuess);

        //these commands determine the wins or losses of this game

        //this is what happens when you when win
        if (userGuess === compGuess) {
            gameReset();
            gameWin();

            //this is what happens when you make a wrong guess
        } else if (userGuess !== compGuess) {
            wrongGuess();

            //this is what happens when you lose the game
            if (guesses === 0) {
                gameReset();
                gameLoss();
            }
        }

    }
        //this displays the input and tracks the games progress
    var html =
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter Mentok is thinking of</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>remaining guesses: " + guesses + "</p>" +
        "<p>Letters you have guessed so far: " + guessedLetter + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}