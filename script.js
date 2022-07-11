function computerPlay () {
    const computer = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * computer.length);
    return computer[random];
}

function playRound (playerSelection, computerSelection) {
    const template = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " vs " + computerSelection.charAt(0).toUpperCase() + computerSelection.toLowerCase().slice(1);
    const win = "Win! " + template;
    const draw = "Draw! " + template;
    const lose = "Lose! " + template;

    let Rock = "Rock";
    let Paper = "Paper";
    let Scissors = "Scissors";

    let Rocklow = Rock.toLowerCase();
    let Paperlow = Paper.toLowerCase();
    let Scissorslow = Scissors.toLowerCase();

    let playerSelectionlow = playerSelection.toLowerCase();
    let computerSelectionlow = computerSelection.toLowerCase();

    switch(playerSelectionlow) {
        case Rocklow:
            switch (computerSelectionlow){
                case Rocklow:
                    return draw;
                    break;
                case Paperlow:
                    return lose;
                    break;
                case Scissorslow:
                    return win;
                    break;
            }
            break;
        case Paperlow:
            switch (computerSelectionlow){
                case Rocklow:
                    return win;
                    break;
                case Paperlow:
                    return draw;
                    break;
                case Scissorslow:
                    return lose;
                    break;
            }
            break;
        case Scissorslow:
            switch (computerSelectionlow){
                case Rocklow:
                    return lose;
                    break;
                case Paperlow:
                    return win;
                    break;
                case Scissorslow:
                    return draw;
                    break;
            }
            break;
    }
} 

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your choice?");
        const computerSelection = computerPlay();
        console.log("Round " + (i + 1));
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();