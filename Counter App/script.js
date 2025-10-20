const countEl = document.getElementById('count');
const incBtn = document.getElementById('inc');
const decBtn = document.getElementById('dec');
const resetBtn = document.getElementById('reset');

let count = 0;

// Increment
incBtn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
});

// Decrement
decBtn.addEventListener('click', () => {
  count--;
  countEl.textContent = count;
});

// Reset
resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});
