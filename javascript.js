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

// console.log(`### human roll: ${humanRoll}`);
