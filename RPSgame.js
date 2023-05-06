function computerPlay(){
    const choice = ["rock", "paper", "scissors"]

    let computerSelection = choice[Math.floor(Math.random()*3)];
    console.log("Computer chose: " + ` ${computerSelection}`);
}


function userPlay() {
  let playerSelection = prompt("Please choose either rock, paper or scissors.\nChoose stop to cancel the game");

  while(true) {
      if(playerSelection == null)
      playerSelection = prompt("Error! Please choose either rock, paper or scissors. \nChoose stop to cancel the game");
      else if(playerSelection.toLowerCase() === 'stop')
            break;
      else if(playerSelection.toLowerCase() === "rock"
      || playerSelection.toLowerCase() === "paper"
      || playerSelection.toLowerCase() === "scissors") {
        console.log("You chose: " + `${playerSelection}`); 
          break;}
      else
      playerSelection = prompt("Error! Please choose either rock, paper or scissors. \nChoose stop to cancel the game");
  }

  return playerSelection;
}


function game(roundCount = 5) {
  userScore = 0;
  computerScore = 0

  for (let i = 1; i <= roundCount; ++i) {
      playerSelection = userPlay();
      computerSelection = computerPlay();
    
      if(playerSelection.toLowerCase() === 'stop') {
          console.log("The Game has been canceld!")
          return;
      }
      
      console.log(`Round ${i}/${roundCount} results:`)
      if(playerSelection === computerSelection){
        console.log ('Its a tie!');
    }
    else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
          console.log ('You lose! Rock beats paper!');
          computerScore++;
  
        }else{
          console.log ('You win! Rock beats paper!');
          userScore++;
        }
    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
          console.log ('You lose! Rock beats scissors!');
          computerScore++;
        }else{
          console.log ('You win! Rock beats scissors!');
          userScore++;
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
          console.log ('You lose! scissors beats paper!');
          computerScore++;
        }else{
          console.log ('You win! scissors beats paper!');
          userScore++;
        }
    }
   
  }

  if(userScore === computerScore)
      console.log("Game ended in a Draw!");
  else if(userScore > computerScore)
      console.log("You won!")
  else if(userScore < computerScore)
      console.log("You lost!");
}

console.log(game());

