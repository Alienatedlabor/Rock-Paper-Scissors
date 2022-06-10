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
  if (playerChoice === computerChoice) {
    document.querySelector(".round-results").innerHTML = playerDrawMessage;
    drawCount++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.querySelector(".round-results").innerHTML = playerWinMessage;
    playerWinCount++;
  } else {
    document.querySelector(".round-results").innerHTML = playerLossMessage;
    playerLossCount++;
  }
}

function updateResultsbox() {
  document.querySelector(
    ".results-box"
  ).innerHTML = `wins: ${playerWinCount}, losses: ${playerLossCount}, draws: ${drawCount}`;
  if (playerWinCount == 5) {
    document.querySelector(".results-box").innerHTML =
      "You win! Refresh the page to play again!";
  } else if (playerLossCount == 5) {
    document.querySelector(".results-box").innerHTML =
      "You lose! Refresh the page to play again!";
  }
}
