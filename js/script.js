const options= ["rock", "paper", "scissors"]
let score = 0;

const resultScreen = document.querySelector("#result-screen");
const playScreen = document.querySelector("#play-screen");
const userImage = document.getElementById("user-choice-image");
const botImage = document.getElementById("bot-choice-image");
const gameResultText = document.getElementById("game-result-text");
const scoreText = document.getElementById("score");

function handleGameOutcome(userChoice, botChoice){
    let gameOutcome;
    switch(userChoice){
        case "rock":
            if(botChoice === "rock"){
                gameOutcome = "DRAW!";
            }
            if(botChoice === "paper"){
                gameOutcome = "YOU LOST!";
            }
            if(botChoice === "scissors"){
                gameOutcome = "YOU WON!";
            }
            break;
        case "paper":
            if(botChoice === "rock"){
                gameOutcome = "YOU WON!";
            }
            if(botChoice === "paper"){
                gameOutcome = "DRAW!";
            }
            if(botChoice === "scissors"){
                gameOutcome = "YOU LOST!";
            }
            break;
        case "scissors":
            if(botChoice === "rock"){
                gameOutcome = "YOU LOST!";
            }
            if(botChoice === "paper"){
                gameOutcome = "YOU WON!";
            }
            if(botChoice === "scissors"){
                gameOutcome = "DRAW!";
            }
            break;
    }
    return gameOutcome;
}

function handleUserChoice(choice){
    const userChoice = choice;
    const botChoice = options[Math.floor(Math.random()*options.length)]
    const gameOutcome = handleGameOutcome(userChoice, botChoice);

    // Hide play screen
    playScreen.style.display = "none";

    // Set and show the result screen
    switch(userChoice){
        case "rock":
            userImage.src="./assets/Rock.png";
            break;
        case "paper":
            userImage.src="./assets/Paper.png";
            break;
        case "scissors":
            userImage.src = "./assets/Scissors.png";
            break; 
    }

    switch(botChoice){
        case "rock":
            botImage.src="./assets/Rock.png";
            break;
        case "paper":
            botImage.src="./assets/Paper.png";
            break;
        case "scissors":
            botImage.src = "./assets/Scissors.png";
            break; 
    }

    // Updating score
    if(gameOutcome === "YOU WON!"){
        score += 1;
        scoreText.innerText = score;
    }

    gameResultText.innerText = gameOutcome;

    resultScreen.style.display = "flex";
}

function handleRestartButton(){
    resultScreen.style.display = "none";
    playScreen.style.display = "flex";
}
