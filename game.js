let playerGuess;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    // playerSelection = prompt("Please make your pick (Paper, Rock, Scissors)").toLowerCase();
    // computerSelection = computerPlay();

    switch (computerSelection) {
        case 0: "paper";
        break;

        case 1: "rock";
        break;

        case 2: "scissors";
        break;
    }

    if (computerSelection == playerSelection) {
        return("Tied it up");
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return("You win");
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return("You win");
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return("You Win");
    } else {
        return("Sorry, the computer won");
    }
}

const playerSelection = 'paper'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))