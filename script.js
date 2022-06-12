const choices = ["rock", "paper", "scissors"];
let playerWinCount = 0;
let playerLossCount = 0;
let drawCount = 0;
//selects random choice from array 'choices'
function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

//player choice event listener
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    playGame(playerChoice);
    updateResultsbox();
  });
});

//Round
function playGame(playerChoice) {
  let computerChoice = getComputerChoice();
  const playerDrawMessage = "Draw!";
  const playerWinMessage = `You Win! ${playerChoice} beats ${computerChoice}`;
  const playerLossMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
  console.log(playerChoice, computerChoice);
  const roundResults = document.querySelector(".round-results");
  roundResults.classList.remove("win-text", "loss-text");
  if (playerChoice === computerChoice) {
    roundResults.textContent = playerDrawMessage;
    drawCount++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResults.classList.add("win-text");
    roundResults.textContent = playerWinMessage;
    playerWinCount++;
  } else {
    roundResults.classList.add("loss-text");
    roundResults.textContent = playerLossMessage;
    playerLossCount++;
  }
}

function updateResultsbox() {
  const runningScore = document.querySelector(".results-box")
  runningScore.textContent = `wins: ${playerWinCount}, losses: ${playerLossCount}, draws: ${drawCount}`;
  if (playerWinCount == 5) {
    runningScore.textContent =
      "You win! Refresh the page to play again!";
  } else if (playerLossCount == 5) {
    runningScore.textContent =
      "You lose! Refresh the page to play again!";
  }
}
