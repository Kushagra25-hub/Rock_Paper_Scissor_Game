let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate computer choice randomly
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Handle a draw situation
const drawGame = () => {
    msg.innerText = "It's a draw! Try again.";
    msg.style.backgroundColor = "#081b31";
};

// Display winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        // playSound('win'); // Optional sound feature
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        // playSound('lose'); // Optional sound feature
    }
};

// Main game logic
const playGame = (userChoice) => {
    const compChoice = getComputerChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;

        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper";
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
