let counterPlayer = 0;
let counterComputer = 0;

const btnRockHandSign = document.querySelector(".btnRockHandSign");
const btnPaperHandSign = document.querySelector(".btnPaperHandSign");
const btnScissorsHandSign = document.querySelector(".btnScissorsHandSign");

let pointPlayerLiveScore = document.querySelector(".pointPlayerLiveScore");
let pointComputerLiveScore = document.querySelector(".pointComputerLiveScore");

let playerRoundHandSign = document.querySelector(".playerRoundHandSign");
let computerRoundHandSign = document.querySelector(".computerRoundHandSign");

let btnReset = document.querySelector(".btnReset");
btnReset.style.display = "none";

let resultMainContent = document.querySelector(".resultMainContent");

btnRockHandSign.addEventListener("click", () => {
    playGame("rock");
});

btnPaperHandSign.addEventListener("click", () => {
    playGame("paper");
});

btnScissorsHandSign.addEventListener("click", () => {
    playGame("scissors");
});

btnReset.addEventListener("click", () => {
    resetGame();
});

function getComputerChoice() {
    let arrChoice = ["rock", "paper", "scissors"];
    let choice = arrChoice[Math.floor(Math.random() * arrChoice.length)];
    return choice;
}

function playGame(playerSelection) {
    let computerSelection = getComputerChoice();

    const callPlayRound = playRound(playerSelection, computerSelection);
    resultMainContent.textContent = callPlayRound;

    pointPlayerLiveScore.textContent = counterPlayer;
    pointComputerLiveScore.textContent = counterComputer;

    playerRoundHandSign.textContent = playerSelection;
    computerRoundHandSign.textContent = computerSelection;

    if (counterPlayer >= 5 && counterComputer < counterPlayer) {
        resultMainContent.textContent = "Player Win the game. Congratulations!";
        btnReset.style.display = "";
        return;
    } else if (counterComputer >= 5 && counterComputer > counterPlayer) {
        resultMainContent.textContent = "Computer Win the game. Nice try!";
        btnReset.style.display = "";
        return;
    }
}

function resetGame() {
    counterComputer = 0;
    counterPlayer = 0;
    pointPlayerLiveScore.textContent = counterPlayer;
    pointComputerLiveScore.textContent = counterComputer;
    playerRoundHandSign.textContent = "";
    computerRoundHandSign.textContent = "";
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === "rock" && computerSelection === "paper"):
            counterComputer++;
            return "You Lose! Paper beats Rock!";
        case (playerSelection === "rock" && computerSelection === "scissors"):
            counterPlayer++;
            return "You Win! Rock beats Scissors!";
        case (playerSelection === "rock" && computerSelection === "rock"):
            return "Draw! Rock vs Rock";
        case (playerSelection === "paper" && computerSelection === "rock"):
            counterPlayer++;
            return "You Win! Paper beats Rock!";
        case (playerSelection === "paper" && computerSelection === "scissors"):
            counterComputer++;
            return "You Lose! Scissors beats Paper!";
        case (playerSelection === "paper" && computerSelection === "paper"):
            return "Draw! Paper vs Paper";
        case (playerSelection === "scissors" && computerSelection === "rock"):
            counterComputer++;
            return "You Lose! Rock beats Scissors!";
        case (playerSelection === "scissors" && computerSelection === "paper"):
            counterPlayer++;
            return "You Win! Scissors beats Paper!";
        case (playerSelection === "scissors" && computerSelection === "scissors"):
            return "Draw! Scissors vs Scissors";
        default:
            return "Invalid selections!";
    }
}