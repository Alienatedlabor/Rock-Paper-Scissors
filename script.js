const choices = ["rock", "paper", "scissors"];

//selects random choice from array 'choices'
function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

//player choice prompt
function getPlayerChoice() {
  let input = prompt("Rock, Paper, or Scissors?");
  while (input == null || !validateChoice(input.toLowerCase())) {
    input = prompt("Rock, Paper, or Scissors?");
  }
  return input.toLowerCase();
}

//validate playerChoice
function validateChoice(input) {
  return choices.includes(input)
}

//Round
function playGame() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  const playerDrawMessage = "Draw!";
  const playerWinMessage = `You Win! ${playerChoice} beats ${computerChoice}`;
  const playerLossMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    console.log(playerDrawMessage);
    return "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(playerWinMessage);
    return "win";
  } else {
    console.log(playerLossMessage);
    return "loss";
  }
}

//Multiple Rounds & Scoring
function fullGame() {
  let playerWinCount = 0;
  let playerLossCount = 0;
  let drawCount = 0;
  for (let i = 0; i <= 4; i++) {
    let result = playGame(i);
    if (result == "win") {
      playerWinCount++;
      console.log(playerWinCount, playerLossCount, drawCount);
    } else if (result == "loss") {
      playerLossCount++;
      console.log(playerWinCount, playerLossCount, drawCount);
    } else {
      drawCount++;
      console.log(playerWinCount, playerLossCount, drawCount);
    }
  }
}

//calling functions
//fullGame();
