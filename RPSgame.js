let userScore = 0;
let computerScore = 0;
const choice = ['rock', 'paper', 'scissors']

function computerPlay(){    
    let computerSelection = choice[Math.floor(Math.random()*3)];
    console.log("Computer chose: " + ` ${computerSelection}`);
}

function userPlay() {
  let playerSelection = prompt("Please choose either rock, paper or scissors.\nChoose stop to cancel the game");

  while(true) {
    if(playerSelection == null)
        playerSelection = prompt("Error! Please choose either rock, paper or scissors. \nChoose stop to cancel the game");
    else if(playerSelection.trim().toLowerCase() === "stop")
        break;  
    else if(playerSelection.trim().toLowerCase() === "rock"
        || playerSelection.trim().toLowerCase() === "paper"
        || playerSelection.trim().toLowerCase() === "scissors") {
        console.log("You chose: " + `${playerSelection}`); 
        break;}
    else
        playerSelection = prompt("Error! Please choose either rock, paper or scissors. \nChoose stop to cancel the game");
  }
  return playerSelection;
}


function playRound(playerChoice, computerChoice){

      const pChoice = playerChoice.trim().toLowerCase();
      const cChoice = computerChoice;

      if(pChoice === cChoice)
            return console.log ('Its a tie!');

      if(pChoice === "rock" && cChoice === "paper")
            return console.log ('You lose! Rock beats paper!');
            computerScore++;

      if(pChoice === "rock" && cChoice === "scissors")
            return console.log ('You win! Rock beats paper!');
            userScore++;

      if(pChoice === "paper" && cChoice === "scissors")
            return console.log ('You lose! scissors beats paper!')
            computerScore++;

      if(pChoice === "paper" && cChoice === "rock")
            return console.log ('You Win! Paper beats Rock!');
            userScore++;

      if(pChoice === "scissors" && cChoice === "rock")
            return console.log ('You lose! Rock beats scissors!');
            computerScore++;

      if(pChoice === "scissors" && cChoice === "paper")
            return console.log ('You win! scissors beats paper!');
            userScore++;
}

const outcome = () =>{
      if(userScore === computerScore){
            console.log("Game ended in a Draw!")}
        else if(userScore > computerScore){
            console.log("You won!")}
        else if(userScore < computerScore){
            console.log("You lost!")}
}

function game(roundCount = 5) {

  for (let i = 1; i <= roundCount; ++i) {
      const playerChoice = userPlay();
      const computerChoice = computerPlay();
    if(playerChoice.trim().toLowerCase() === 'stop') {
      console.log("The Game has been canceld!")
      return;
    }
    console.log(`Round ${i}/${roundCount} results:`)
    playRound(playerChoice, computerChoice);
  }

outcome(); 
}

console.log(game());

