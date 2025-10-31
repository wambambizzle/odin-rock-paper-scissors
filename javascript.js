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

const computerRoll = getComputerChoice();
// console.log(`### roll: ${computerRoll}`);
