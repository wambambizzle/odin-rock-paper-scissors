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
  console.log(`Your choice: ${adjustedChoice}`);

  const results = document.querySelector(".results");

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
    console.log(`Comp choice: ${computerChoice}`);
    playRound(button.id, computerChoice);
  });
});
