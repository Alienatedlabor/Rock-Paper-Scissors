/*  
  const ROCK = "Rock";
  const PAPER = "Paper";
  const SCISSORS = "Scissors"; 
*/
const choices = ["rock", "paper", "scissors"];

//selects random choice from array 'choices'
function computerPlay() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  return computerChoice;
}
//player choice prompt
function playerChoice() {
  let input = prompt("Rock, Paper, or Scissors?");
  while (input == null) {
    input = prompt("Rock, Paper, or Scissors?");
  }
  input = input.toLowerCase();
  check = validateChoice(input);
  if (check == true) {
    console.log(input);
    return input;
  } else {
    playerChoice();
  }
}
//Round
function gameRound(computerChoice, input){
let player = input;
let ai = computerChoice;
if (player == ai) {
  console.log("Draw!")
}

}

//validate playerChoice
function validateChoice(input) {
  if (choices.includes(input)) {
    return true;
  }
  return false;
}
//calling functions
playerChoice();
computerPlay();
gameRound();
//console.log(player == ai);