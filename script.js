
/*  
  const ROCK = "Rock";
  const PAPER = "Paper";
  const SCISSORS = "Scissors"; 
*/



  function computerPlay(){
    
    const choices = ["Rock" , "Paper", "Scissors"];
    const computerChoice = [Math.floor(Math.random() * choices.length)];
    return console.log(computerChoice);
}
computerPlay();