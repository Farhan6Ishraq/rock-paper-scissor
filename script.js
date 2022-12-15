let getRoundChoice = () => {
  return prompt("Pick Round 1 or Round 5");
};

let getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];

  return options[Math.floor(Math.random() * (3 - 0)) + 0];
};

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

let oneRound = (playerSelection, computerSelection) => {};

let completeGame = () => {
  let roundSelection = getRoundChoice();
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  if (roundSelection == 1) {
    oneRound(playerSelection, computerSelection);
  }
};

//completeGame();
