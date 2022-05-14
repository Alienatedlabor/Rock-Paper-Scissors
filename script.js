
/*  
  const ROCK = "Rock";
  const PAPER = "Paper";
  const SCISSORS = "Scissors"; 
*/



  function computerPlay(){
    const ROCK = "Rock";
    const PAPER = "Paper";
    const SCISSORS = "Scissors"; 
    const choices = [ROCK , PAPER, SCISSORS];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return console.log(computerChoice);
}
computerPlay();