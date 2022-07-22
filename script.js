const body = () => {
    let playerScore = 0;
    let computerScore = 0;

    function computerPlay () {
        const computer = ["ROCK", "PAPER", "SCISSORS"];
        const random = Math.floor(Math.random() * computer.length);
        return computer[random];
    }

    function playRound (playerSelection, computerSelection) {
        const gameOver = () => {
            if(computerScore == 5 || playerScore == 5) {
                Finish();
                computerScore = 0;
                playerScore = 0;
                playerScoreBoard.innerHTML = playerScore;
                computerScoreBoard.innerHTML = computerScore;
            }
        }
        
        let Rock = "Rock";
        let Paper = "Paper";
        let Scissors = "Scissors";

        let Rocklow = Rock.toLowerCase();
        let Paperlow = Paper.toLowerCase();
        let Scissorslow = Scissors.toLowerCase();

        let playerSelectionlow = playerSelection.toLowerCase();
        let computerSelectionlow = computerSelection.toLowerCase();

        const computerScoreBoard = document.querySelector('.computerCount');
        const playerScoreBoard = document.querySelector('.playerCount');

        selection = document.querySelector('.selection');
        selection.innerHTML = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " vs " + computerSelection.charAt(0).toUpperCase() + computerSelection.toLowerCase().slice(1);
        gameOver();

        switch(playerSelectionlow) {
            case Rocklow:
                switch (computerSelectionlow){
                    case Paperlow:
                        computerScore++;
                        computerScoreBoard.innerHTML = computerScore;
                        break;
                    case Scissorslow:
                        playerScore++;
                        playerScoreBoard.innerHTML = playerScore;
                        break;
                }
                break;
            case Paperlow:
                switch (computerSelectionlow){
                    case Rocklow:
                        playerScore++;
                        playerScoreBoard.innerHTML = playerScore;
                        break;
                    case Scissorslow:
                        computerScore++;
                        computerScoreBoard.innerHTML = computerScore;
                        break;
                }
                break;
            case Scissorslow:
                switch (computerSelectionlow){
                    case Rocklow:
                        computerScore++;
                        computerScoreBoard.innerHTML = computerScore;
                        break;
                    case Paperlow:
                        playerScore++;
                        playerScoreBoard.innerHTML = playerScore;
                        break;
                }
                break;
        }
    } 

    function game() {
        document.getElementById("rock").addEventListener("click", function() {
            playerSelection = "Rock";
            content();
        });
        document.getElementById("paper").addEventListener("click", function() {
            playerSelection = "Paper";
            content();
        });
        document.getElementById("scissors").addEventListener("click", function() {
            playerSelection = "Scissors";
            content();
        });
    }

    function content(){
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    const Finish = (playerSelection) => {
        const result = document.querySelector('.result');
        if(playerScore > computerScore){
            result.innerText = 'You Won The Game'
        }
        else {
            result.innerText = 'You Lost The Game';
        }
    }
    game();
}

body();