let countValue = 0;
const countDisplay = document.getElementById('count');

function increment() {
  countValue++;
  updateDisplay();
}

function decrement() {
  countValue--;
  updateDisplay();
}

function reset() {
  countValue = 0;
  updateDisplay();
}

function updateDisplay() {
  countDisplay.textContent = countValue;
}
