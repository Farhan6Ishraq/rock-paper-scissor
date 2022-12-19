const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    getPlayerChoice(button);
  });
});

//Asks how many rounds the player wants to play
let getRoundChoice = () => {
  let roundSelection = prompt("Pick Round 1 or Round 5");

  if (roundSelection == 1 || roundSelection == 5) {
    return roundSelection;
  } else {
    getRoundChoice();
  }
};

//Returns a randomized move by the computer
let getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];

  return options[Math.floor(Math.random() * (3 - 0)) + 0];
};

/* Allows players to pick rock, paper and scissors,
verifies if players picked one of the specified moves */
let getPlayerChoice = (button) => {
  let playerChoice;

  if(button.textContent == 'Rock') {
    playerChoice = 'rock';
  } else if(button.textContent == 'Paper') {
    playerChoice = 'paper';
  } else if(button.textContent == 'Scissor') {
    playerChoice = 'scissor';
  }
  console.log(playerChoice);
  return playerChoice;
  // let playerChoice = prompt("Pick Rock, Paper or Scissor").toLowerCase();
  // if (
  //   playerChoice === "rock" ||
  //   playerChoice === "paper" ||
  //   playerChoice === "scissor"
  // ) {
  //   return playerChoice;
  // } else {
  //   getPlayerChoice();
  // }
};

//Compares all the player and computer selections
function gameAlgo(playerSelection, computerSelection) {
  let playerValue = 0;
  let computerValue = 0;

  if (playerSelection === "rock" && computerSelection == "rock") {
    console.log("Computer picked Rock. It's a draw");
    playerValue += 0;
    computerValue += 0;
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    console.log("Computer picked Paper. You lose.");
    playerValue -= 1;
    computerValue += 1;
  } else if (playerSelection === "rock" && computerSelection == "scissor") {
    console.log("Computer picked Scissor. You won.");
    playerValue += 1;
    computerValue -= 1;
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    console.log("Computer picked Rock. You won.");
    playerValue += 1;
    computerValue -= 1;
  } else if (playerSelection === "paper" && computerSelection == "paper") {
    console.log("Computer picked paper. Its a draw.");
    playerValue += 0;
    computerValue += 0;
  } else if (playerSelection === "paper" && computerSelection == "scissor") {
    console.log("Comouter picked Scissor. You lose.");
    playerValue -= 1;
    computerValue += 1;
  } else if (playerSelection === "scissor" && computerSelection == "rock") {
    console.log("Computer picked Rock. You lose.");
    playerValue -= 1;
    computerValue += 1;
  } else if (playerSelection === "scissor" && computerSelection == "paper") {
    console.log("Computer picked Paper. You Win.");
    playerValue += 1;
    computerValue -= 1;
  } else if (playerSelection === "scissor" && computerSelection == "scissor") {
    console.log("Computer picked Scissor. Its a draw.");
    playerValue += 0;
    computerValue += 0;
  }

  return { playerValue, computerValue };
}

//Allows the game to run for one round
// let oneRound = (playerSelection, computerSelection) => {
//     console.log(gameAlgo(playerSelection, computerSelection));

// };

//Compilation of all the functions in a chronological order
let completeGame = () => {
  let roundSelection = getRoundChoice();
  let playerSelection;
  let computerSelection;

  let playerValue = 0;
  let computerValue = 0;

  //Runs if the player wishes to play for one round
  if (roundSelection == 1) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    playerValue += gameAlgo(playerSelection, computerSelection).playerValue;
    computerValue += gameAlgo(playerSelection, computerSelection).computerValue;

    console.log(playerValue);
    console.log(computerValue);

    //Runs if the player wishes to play for five rounds
  } else if (roundSelection == 5) {
    for (let i = 1; i <= 5; i++) {
      playerSelection = getPlayerChoice();
      computerSelection = getComputerChoice();
      playerValue += gameAlgo(playerSelection, computerSelection).playerValue;
      computerValue += gameAlgo(
        playerSelection,
        computerSelection
      ).computerValue;

      console.log(playerValue);
      console.log(computerValue);
    }
  } else {
    completeGame();
  }

  console.log(playerValue, computerValue);
};

//completeGame();
