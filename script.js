//Asks how many rounds the player wants to play
let getRoundChoice = () => {
  return prompt("Pick Round 1 or Round 5");
};

//Returns a randomized move by the computer
let getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];

  return options[Math.floor(Math.random() * (3 - 0)) + 0];
};

/* Allows players to pick rock, paper and scissors,
verifies if players picked one of the specified moves */
let getPlayerChoice = () => {
  let playerChoice = prompt("Pick Rock, Paper or Scissor").toLowerCase();

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissor"
  ) {
    return playerChoice;
  } else {
    getPlayerChoice();
  }
};

//Compares all the player and computer selections
function gameAlgo(playerSelection, computerSelection) {
    let playerValue = 0;
    let computerValue = 0;

    if(playerSelection === 'rock' && computerSelection == 'rock') {
        console.log('Its a Draw');
        playerValue += 0;
        computerValue += 0;
    } else if(playerSelection === 'rock' && computerSelection == 'paper') {
      console.log('Computer has Won');
      playerValue -= 1;
      computerValue += 1;
    } else if(playerSelection === 'rock' && computerSelection == 'scissor') {
      console.log('Player has Won');
      playerValue += 1;
      computerValue -= 1;
    } else if(playerSelection === 'paper' && computerSelection == 'rock') {
      console.log('Player has Won');
      playerValue += 1;
      computerValue -= 1;
    } else if(playerSelection === 'paper' && computerSelection == 'paper') {
      console.log('Its a Draw');
      playerValue += 0;
      computerValue += 0;
    } else if(playerSelection === 'paper' && computerSelection == 'scissor') {
      console.log('Computer has Won');
      playerValue -= 1;
      computerValue += 1;
    } else if(playerSelection === 'scissor' && computerSelection == 'rock') {
      console.log('Computer has Won');
      playerValue -= 1;
      computerValue += 1;
    } else if(playerSelection === 'scissor' && computerSelection == 'paper') {
      console.log('Player has Won');
      playerValue += 1;
      computerValue -= 1;
    } else if(playerSelection === 'scissor' && computerSelection == 'scissor') {
      console.log('Its a Draw');
      playerValue += 0;
      computerValue += 0;
    }

    return {playerValue , computerValue};
}

//Allows the game to run for one round
// let oneRound = (playerSelection, computerSelection) => {
//     console.log(gameAlgo(playerSelection, computerSelection));

// };

//Compilation of all the functions in a chronological order
let completeGame = () => {
  let roundSelection = getRoundChoice();
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  let playerValue = 0;
  let computerValue = 0;

  if (roundSelection == 1) {
    playerValue += gameAlgo(playerSelection, computerSelection).playerValue;
    computerValue += gameAlgo(playerSelection, computerSelection).computerValue;

    console.log(computerValue);
    console.log(playerValue);
  } else if (roundSelection == 5) {
    
  } else {
    completeGame();
  }
};

// completeGame();