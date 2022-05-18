/*  
  const ROCK = "Rock";
  const PAPER = "Paper";
  const SCISSORS = "Scissors"; 
*/
const choices = ["rock", "paper", "scissors"];

//selects random choice from array 'choices'
function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}
//player choice prompt
function getPlayerChoice() {
  let input = prompt("Rock, Paper, or Scissors?");
  while (input == null || !validateChoice(input)) {
    input = prompt("Rock, Paper, or Scissors?");
  }
  input = input.toLowerCase();
  return input;
}
//to lower case doesn't seem like it's working now, make sure to ask about it or try and fix it

//validate playerChoice
function validateChoice(input) {
  if (choices.includes(input)) {
    return true;
  }
  return false;
}
//Round
function playGame() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  const playerDraw = "Draw!";
  const playerWin = `You Win! ${playerChoice} beats ${computerChoice}`;
  const playerLoss = `You Lose! ${computerChoice} beats ${playerChoice}`
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    console.log(playerDraw);
    return playerDraw;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(playerWin);
    return playerWin;
  } else {
    console.log(playerLoss);
    return playerLoss;
  }
}
//Multiple Rounds
function fullGame(){
  for ( let i = 0; i <= 4; i++){
    playGame(i)
  }
}

//calling functions
//playGame();
fullGame();