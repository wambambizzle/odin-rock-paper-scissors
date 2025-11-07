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

function playRound(humanChoice, computerChoice) {
  let adjustedChoice = humanChoice.toLowerCase();

  if (adjustedChoice == computerChoice) {
    console.log("It's a tie!");
    return null;
  }

  if (adjustedChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors");
    return true;
  }

  if (adjustedChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    return false;
  }

  if (adjustedChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock");
    return true;
  }

  if (adjustedChoice == "paper" && computerChoice == "scissors") {
    // computerScore += 1;
    console.log("You lose! Scissors beats Paper");
    return false;
  }

  if (adjustedChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper");
    return true;
  }

  if (adjustedChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors");
    return false;
  }
}
