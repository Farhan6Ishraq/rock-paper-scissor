let getRoundChoice = () => {
    return prompt('Pick Round 1 or Round 5');
}

//let roundSelection = getRoundChoice();

let getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissor'];

  return options[Math.floor(Math.random() * (3 - 0)) + 0]
};

//let computerSelection = getComputerChoice();

let getPlayerChoice = () => {
    return prompt('Pick Rock, Paper or Scissors');
};

//let playerSelection = getPlayerChoice();








let completeGame = () => {
    let roundSelection = getRoundChoice();

    if(roundSelection == 1) {
        console.log('true');
    }
}

completeGame();