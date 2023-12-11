function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playCraps() {
  const dice1 = document.getElementById('die1');
  const dice2 = document.getElementById('die2');
  const comeOutRoll = rollDice() + rollDice();

  dice1.classList = `fas fa-dice-${rollDice()} die`;
  dice2.classList = `fas fa-dice-${rollDice()} die`;

  let result;

  if (comeOutRoll === 7 || comeOutRoll === 11) {
    result = "You win!";
  } else if (comeOutRoll === 2 || comeOutRoll === 3 || comeOutRoll === 12) {
    result = "You lose!";
  } else {
    let point = comeOutRoll;

    while (true) {
      const nextRoll = rollDice() + rollDice();

      dice1.classList = `fas fa-dice-${rollDice()} die`;
      dice2.classList = `fas fa-dice-${rollDice()} die`;

      if (nextRoll === point) {
        result = "You win!";
        break;
      } else if (nextRoll === 7) {
        result = "You lose!";
        break;
      }

      document.getElementById('continueButton').style.display = 'block';
      document.getElementById('continueButton').addEventListener('click', () => {
        playCraps();
        document.getElementById('continueButton').style.display = 'none';
      });
    }
  }

  const resultsDiv = document.getElementById("results");
  const resultElement = document.createElement("p");
  resultElement.textContent = `${result}`;
  resultsDiv.appendChild(resultElement);
}

document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById("results").innerHTML = "";
  playCraps();
});
