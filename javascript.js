let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomRoll = Math.floor(Math.random() * 100);

  switch (true) {
    case randomRoll <= 33:
      return "paper";
    case randomRoll <= 66:
      return "scissors";
    case randomRoll <= 100:
      return "rock";
    default:
      return "paper";
  }
}

function getHumanChoice() {
  return prompt("rock paper scissors.. shoot: ");
}

const computerRoll = getComputerChoice();
const humanRoll = getHumanChoice();

// console.log(`### comp roll: ${computerRoll}`);
// console.log(`### human choice: ${humanRoll}`);

function playRound(humanChoice, computerChoice) {
  let adjustedChoice = humanChoice.toLowerCase();

  // console.log(`### inner comp roll: ${computerChoice}`);
  // console.log(`### inner human roll: ${adjustedChoice}`);

  if (adjustedChoice == computerChoice) {
    return console.log("It's a tie!");
  }

  if (adjustedChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    return console.log("You win! Rock beats Scissors");
  }

  if (adjustedChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    return console.log("You lose! Paper beats Rock");
  }

  if (adjustedChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    return console.log("You win! Paper beats Rock");
  }

  if (adjustedChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
    return console.log("You lose! Scissors beats Paper");
  }

  if (adjustedChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    return console.log("You win! Scissors beats Paper");
  }

  if (adjustedChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
    return console.log("You lose! Rock beats Scissors");
  }
}

playRound(humanRoll, computerRoll);
// console.log(`$$$$ humanScore: ${humanScore}, computerScore: ${computerScore}`);
