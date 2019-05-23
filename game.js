let playerGuess;
let playerWins = 0;
let computerWins = 0;
let gameCount = 0;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    // playerSelection = prompt("Please make your pick (Paper, Rock, Scissors)").toLowerCase();
    // computerSelection = computerPlay();

    switch (computerSelection) {
        case 0: computerSelection = "paper";
        break;

        case 1: computerSelection = "rock";
        break;

        case 2: computerSelection = "scissors";
        break;
    }

    if (computerSelection == playerSelection) {
        console.log("Tied it up");
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You win");
        playerWins++
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You win");
        playerWins++
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You Win");
        playerWins++
    } else {
        console.log("Sorry, the computer won");
        computerWins++
    }
}

function game() {
    playerSelection = prompt("Please make your pick (Paper, Rock, or Scissors)").toLowerCase();
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection);
    gameCount++
}

while (gameCount < 5) {
    game();
}

console.log(`Player won: ${playerWins} \n Computer won: ${computerWins}`);

// const playerSelection = 'paper'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))