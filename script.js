"use strict";

function getHumanChoice() {
  let choice = prompt(
    "Enter nos-1,2,3 for the following choices:\n1:Rock, 2:Paper, 3:Scissor"
  );
  if (choice == 1) {
    choice = "rock";
  } else if (choice == 2) {
    choice = "paper";
  } else if (choice == 3) {
    choice = "scissor";
  } else {
    choice = null;
    alert(
      "Please enter approprite value.\nHit RELOAD or cntl+R to run the game again"
    );
  }
  console.log(`Human Chooses: ${choice}`);
  return choice;
}

function getComputerChoice() {
  let choice;
  const selection = Math.random().toFixed(2);
  if (selection < 0.33) {
    choice = "rock";
  } else if (selection >= 0.33 && selection < 0.66) {
    choice = "paper";
  } else {
    choice = "scissor";
  }
  console.log(`Computer Chooses: ${choice}`);
  return choice;
}

function playRound(humanSelection, computerSelection) {
  if (computerSelection == "rock") {
    switch (humanSelection) {
      case "paper":
        return "Human";
        break;
      case "scissor":
        return "Computer";
      default:
        return "Tie";
        break;
    }
  } else if (computerSelection == "paper") {
    switch (humanSelection) {
      case "rock":
        return "Computer";
        break;
      case "scissor":
        return "Human";
      default:
        return "Tie";
        break;
    }
  } else if (computerSelection == "scissor") {
    switch (humanSelection) {
      case "rock":
        return "Human";
        break;
      case "paper":
        return "Computer";
      default:
        return "Tie";
        break;
    }
  }
}

function printResult(result) {
  if (result == "Tie") {
    console.log("It's a tie game!");
  } else {
    console.log(`${result} Wins!`);
  }
}

function updateScore(result) {
  if (result == "Human") {
    humanScore++;
  } else if (result == "Computer") {
    computerScore++;
  }
}

// program flow
let humanScore = 0;
let computerScore = 0;

while (humanScore < 5 && computerScore < 5) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  let result;
  result = playRound(humanSelection, computerSelection); // returns string Tie,Computer,Human
  printResult(result);
  updateScore(result);
  console.log(`HUMANS:${humanScore} :: COMPUTER:${computerScore}`);
}
if (humanScore == 5) {
  console.log("HUMANITY HAS PREVAILED!");
} else {
  console.log("SILICONS HAVE CRUSHED HUMANS!");
}
