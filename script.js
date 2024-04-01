let counterPlayer = 0;
let counterComputer = 0;

function getComputerChoice() {
    let arrChoice = ["rock", "paper", "scissors"];
    let choice = arrChoice[Math.floor(Math.random() * arrChoice.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === "rock"):
        case (computerSelection === "paper"):
            ++counterComputer;
            return "You Lose! Paper beats Rock!";
            break;
        case (playerSelection === "rock"):
        case (computerSelection === "scissors"):
            ++counterPlayer;
            return "You Win! Rock beats Scissors!";
            break;
        case (playerSelection === "rock"):
        case (computerSelection === "rock"):
            return "Draw! Rock vs Rock";
            break;
        case (playerSelection === "paper"):
        case (computerSelection === "rock"):
            ++counterPlayer;
            return "You Win! Paper beats Rock!";
            break;
        case (playerSelection === "paper"):
        case (computerSelection === "scissors"):
            ++counterComputer;
            return "You Lose! Scissors beats Paper!";
            break;
        case (playerSelection === "paper"):
        case (computerSelection === "paper"):
            return "Draw! Paper vs Paper";
            break;
        case (playerSelection === "scissors"):
        case (computerSelection === "rock"):
            ++counterComputer;
            return "You Lose! Rock beats Scissors!";
            break;
        case (playerSelection === "scissors"):
        case (computerSelection === "paper"):
            ++counterPlayer;
            return "You Win! Scissors beats Paper!";
            break;
        case (playerSelection === "scissors"):
        case (computerSelection === "scissors"):
            return "Draw! Scissors vs Scissors";
            break;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Welcome to our game!\nRock, Paper, or Scissors?!").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (counterPlayer > counterComputer) {
        console.log(`You Win The Game. Congratulations!\nPlayer: ${counterPlayer}\nComputer: ${counterComputer}`);
    } else if (counterPlayer === counterComputer) {
        console.log(`Draw! Player vs Computer.\nPlayer: ${counterPlayer}\nComputer: ${counterComputer}`);
    } else {
        console.log(`You Lose the game. Good game!\nPlayer: ${counterPlayer}\nComputer: ${counterComputer}`);
    }
}

playGame();