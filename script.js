const choices = document.querySelectorAll("[data-choice]");
const playerChoiceElement = document.getElementById("player-choice");
const computerChoiceElement = document.getElementById("computer-choice");
const resultTextElement = document.querySelector(".result-text");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resetButton = document.getElementById("reset-btn");

let playerScore = 0;
let computerScore = 0;

choices.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    displayChoices(playerChoice, computerChoice);
    determineWinner(playerChoice, computerChoice);
  });
});

resetButton.addEventListener("click", resetGame);

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function displayChoices(playerChoice, computerChoice) {
  playerChoiceElement.textContent = formatChoice(playerChoice);
  computerChoiceElement.textContent = formatChoice(computerChoice);
}

function formatChoice(choice) {
  switch (choice) {
    case "rock":
      return "✊ Rock";
    case "paper":
      return "✋ Paper";
    case "scissors":
      return "✌️ Scissors";
    default:
      return "-";
  }
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resultTextElement.textContent = "It's a draw!";
    return;
  }

  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winningConditions[playerChoice] === computerChoice) {
    playerScore++;
    playerScoreElement.textContent = playerScore;
    resultTextElement.textContent = "You win!";
  } else {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    resultTextElement.textContent = "Computer wins!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  playerChoiceElement.textContent = "-";
  computerChoiceElement.textContent = "-";
  resultTextElement.textContent = "Make your move!";
}
