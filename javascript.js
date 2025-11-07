let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");
const score = document.querySelector(".score");

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
    results.textContent = "It's a tie!";
    return null;
  }

  if (adjustedChoice == "rock" && computerChoice == "scissors") {
    results.textContent = "You win! Rock beats Scissors";
    return true;
  }

  if (adjustedChoice == "rock" && computerChoice == "paper") {
    results.textContent = "You lose! Paper beats Rock";
    return false;
  }

  if (adjustedChoice == "paper" && computerChoice == "rock") {
    results.textContent = "You win! Paper beats Rock";
    return true;
  }

  if (adjustedChoice == "paper" && computerChoice == "scissors") {
    results.textContent = "You lose! Scissors beats Paper";
    return false;
  }

  if (adjustedChoice == "scissors" && computerChoice == "paper") {
    results.textContent = "You win! Scissors beats Paper";
    return true;
  }

  if (adjustedChoice == "scissors" && computerChoice == "rock") {
    results.textContent = "You lose! Rock beats Scissors";
    return false;
  }
}

const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const roundResult = playRound(button.id, computerChoice);
    setScore(roundResult);
    checkForWinner();
  });
});

function setScore(roundResult) {
  switch (roundResult) {
    case true:
      humanScore += 1;
      break;
    case false:
      computerScore += 1;
      break;
    default:
      break;
  }

  score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
}

function checkForWinner() {
  if (humanScore > 4 || computerScore > 4) {
    if (humanScore === 5) {
      score.textContent = "YOU WIN! You won the round!";
    }

    if (computerScore === 5) {
      score.textContent = "Nice try. You lost the round!";
    }

    humanScore = 0;
    computerScore = 0;
  }
}
