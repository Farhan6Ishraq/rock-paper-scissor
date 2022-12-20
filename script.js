const body = document.querySelector("body");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const buttons = document.querySelectorAll("button");

const winText = document.createElement('p');

const para1 = document.createElement("p");
body.appendChild(para1);

const para2 = document.createElement("p");
body.appendChild(para2);

const scoreDiv = document.createElement("div");
body.appendChild(scoreDiv);

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    completeGameUI(button);
  });
});

let completeGameUI = (button) => {
  let scoreObj = gameAlgo(getPlayerChoice(button), getComputerChoice());

  playerScore += scoreObj.playerValue;
  computerScore += scoreObj.computerValue;

  scoreDiv.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;

  if(playerScore == 5) {
    body.removeChild(btn1);
    body.removeChild(btn2);
    body.removeChild(btn3);

    winText.textContent = 'Player has Won!';
    body.insertBefore(winText, para1);

    const myTimeOut = setTimeout(function() { 
      location.reload();
    }, 3000);
  } else if(computerScore == 5) {
    body.removeChild(btn1);
    body.removeChild(btn2);
    body.removeChild(btn3);

    winText.textContent = 'Computer has Won!';
    body.insertBefore(winText, para1);

    const myTimeOut = setTimeout(function() { 
      location.reload();
    }, 3000);
  }
};

//Asks how many rounds the player wants to play
// let getRoundChoice = () => {
//   let roundSelection = prompt("Pick Round 1 or Round 5");

//   if (roundSelection == 1 || roundSelection == 5) {
//     return roundSelection;
//   } else {
//     getRoundChoice();
//   }
// };

//Returns a randomized move by the computer
let getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let computerChoice = options[Math.floor(Math.random() * (3 - 0)) + 0];

  para2.textContent = `Computer picked ${computerChoice}`;
  console.log(computerChoice);
  return computerChoice;
};

/* Allows players to pick rock, paper and scissors,
verifies if players picked one of the specified moves */
let getPlayerChoice = (button) => {
  let playerChoice;

  if (button.textContent == "Rock") {
    playerChoice = "rock";
  } else if (button.textContent == "Paper") {
    playerChoice = "paper";
  } else if (button.textContent == "Scissor") {
    playerChoice = "scissor";
  }

  para1.textContent = `Player picked ${playerChoice}`;
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

  console.log(playerValue, computerValue);
  return { playerValue, computerValue };
}

//Allows the game to run for one round
// let oneRound = (playerSelection, computerSelection) => {
//     console.log(gameAlgo(playerSelection, computerSelection));

// };

//Compilation of all the functions in a chronological order
// let completeGame = () => {
//   let roundSelection = getRoundChoice();
//   let playerSelection;
//   let computerSelection;

//   let playerValue = 0;
//   let computerValue = 0;

//   //Runs if the player wishes to play for one round
//   if (roundSelection == 1) {
//     playerSelection = getPlayerChoice();
//     computerSelection = getComputerChoice();
//     playerValue += gameAlgo(playerSelection, computerSelection).playerValue;
//     computerValue += gameAlgo(playerSelection, computerSelection).computerValue;

//     console.log(playerValue);
//     console.log(computerValue);

//     //Runs if the player wishes to play for five rounds
//   } else if (roundSelection == 5) {
//     for (let i = 1; i <= 5; i++) {
//       playerSelection = getPlayerChoice();
//       computerSelection = getComputerChoice();
//       playerValue += gameAlgo(playerSelection, computerSelection).playerValue;
//       computerValue += gameAlgo(
//         playerSelection,
//         computerSelection
//       ).computerValue;

//       console.log(playerValue);
//       console.log(computerValue);
//     }
//   } else {
//     completeGame();
//   }

//   console.log(playerValue, computerValue);
// };

//completeGame();
