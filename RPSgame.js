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


function FailedTrials() {

  // function playRound(playerSelection, computerSelection){

//   if(playerSelection === "rock" && computerSelection === 'paper') {
//       console.log ('You win! Rock beats paper!');     
//     } else if (playerSelection === 'rock' && computerSelection === 'rock') {
//         console.log ('Its a tie!');     
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         console.log ('You win! Rock beats scissors!');     
// // User Chooses Paper
//     } else if(playerSelection === "paper" && computerSelection === 'rock') {
//         console.log ('You win! Rock beats paper!');     
//     } else if (playerSelection === 'paper' && computerSelection === 'paper') {
//         console.log ('Its a tie!');     
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
//         console.log ('You lose! Scissors beats paper!');  
// // User Chooses Scissors
//     } else if(playerSelection === "scissors" && computerSelection === 'rock') {
//         console.log ('You lose! Rock beats scissors!');     
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         console.log ('You win! Scissors beats paper!');     
//     } else  { 
//         console.log ('It is a tie!');  
//     } 
// }
// playerSelection = userPlay();
  // computerSelection = computerPlay();
  
//  if(playerSelection === "rock" && computerSelection === 'paper'){
//           console.log ('You lose! Rock beats paper!');
//           computerScore++;
//           break;
//         }
//         else if (playerSelection === 'rock' && computerSelection === 'rock') {
//           console.log ('Its a tie!');
//           break;
//         }
//         else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//           console.log ('You win! Rock beats scissors!'); 
//           userScore++;
//           break;
//         }
//         else if(playerSelection === "paper" && computerSelection === 'rock') {
//           console.log ('You win! Rock beats paper!');
//           userScore++;
//           break;
//         }
//         else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
//           console.log ('You lose! Scissors beats paper!');
//           computerScore++;
//           break;
//         }
//         else if (playerSelection === 'paper' && computerSelection === 'paper') {
//           console.log ('Its a tie!');
//           break;
//         }
//         else if(playerSelection === "scissors" && computerSelection === 'rock') {
//           console.log ('You lose! Rock beats scissors!');
//           computerScore++;
//           break;
//         }
//         else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//           console.log ('You win! Scissors beats paper!');
//           userScore++;
//           break;
//         }
//         else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//           console.log ('Its a tie!');
//           break;
//         }


// // Function to decide winner
// const winner = (player,computer) => {
//   const result = document.querySelector('.result');
//   const playerScoreBoard = document.querySelector('.p-count');
//   const computerScoreBoard = document.querySelector('.c-count');
//   player = player.toLowerCase();
//   computer = computer.toLowerCase();
//   if(player === computer){
//       result.textContent = 'Tie'
//   }
//   else if(player == 'rock'){
//       if(computer == 'paper'){
//           result.textContent = 'Computer Won';
//           computerScore++;
//           computerScoreBoard.textContent = computerScore;

//       }else{
//           result.textContent = 'Player Won'
//           playerScore++;
//           playerScoreBoard.textContent = playerScore;
//       }
//   }
//   else if(player == 'scissors'){
//       if(computer == 'rock'){
//           result.textContent = 'Computer Won';
//           computerScore++;
//           computerScoreBoard.textContent = computerScore;
//       }else{
//           result.textContent = 'Player Won';
//           playerScore++;
//           playerScoreBoard.textContent = playerScore;
//       }
//   }
//   else if(player == 'paper'){
//       if(computer == 'scissors'){
//           result.textContent = 'Computer Won';
//           computerScore++;
//           computerScoreBoard.textContent = computerScore;
//       }else{
//           result.textContent = 'Player Won';
//           playerScore++;
//           playerScoreBoard.textContent = playerScore;
//       }
//   }
// }



//   switch(playerSelection && computerSelection) {
          
//     case 1:
//       if(playerSelection === "rock" && computerSelection === 'paper') {
//       console.log ('You lose! Rock beats paper!');}
//       computerScore++;
//         break;
//     case 2:
//       if (playerSelection === 'rock' && computerSelection === 'rock') {
//         console.log ('Its a tie!');}
//         break;
//     case 3:
//       if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         console.log ('You win! Rock beats scissors!'); }
//         userScore++;
//         break;
//     case 4:
//       if(playerSelection === "paper" && computerSelection === 'rock') {
//         console.log ('You win! Rock beats paper!');}
//         userScore++;
//         break;
//     case 5:
//       if (playerSelection === 'paper' && computerSelection === 'scissors') { 
//         console.log ('You lose! Scissors beats paper!');}
//         computerScore++;
//         break;
//     case 6:
//       if (playerSelection === 'paper' && computerSelection === 'paper') {
//         console.log ('Its a tie!');}
//         break;
//     case 7:
//       if(playerSelection === "scissors" && computerSelection === 'rock') {
//         console.log ('You lose! Rock beats scissors!');}
//         computerScore++;
//         break;
//     case 8:
//       if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         console.log ('You win! Scissors beats paper!');}
//         userScore++;
//         break;
//     case 9:
//       if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//         console.log ('Its a tie!');}
//         break;
//     // default:
//     //   console.log ('Error! Please review your selection');
// }

// function userPlay(){
// const playerSelection = prompt("Please choose either rock, paper or scissors");

// while(true){
//     if(playerSelection == null)
//         {
//           playerSelection = prompt("Error!, Please choose either rock, paper or scissors");
//           break;
//         }    
           
//     else if(playerSelection.toLowerCase === "paper" || playerSelection.toLowerCase === "rock" || playerSelection.toLowerCase === "scissors")
//         {
//           playerSelection = prompt("You chose: " + `${playerSelection}`);
//           break;
//         }    
        
//     else {
//           playerSelection = prompt("Error!, Please choose either rock, paper or scissors");
//         }
// }
//     return playerSelection;
// }
}











