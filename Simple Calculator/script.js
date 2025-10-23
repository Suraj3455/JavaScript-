// Get elements
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const mulBtn = document.getElementById('mul');
const divBtn = document.getElementById('div');
const clearBtn = document.getElementById('clear');

// Function to calculate safely
function calculate(op) {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);

  if (isNaN(n1) || isNaN(n2)) {
    result.textContent = "Enter valid numbers!";
    return;
  }

  let res = 0;
  switch(op) {
    case '+': res = n1 + n2; break;
    case '-': res = n1 - n2; break;
    case '*': res = n1 * n2; break;
    case '/': 
      res = n2 !== 0 ? n1 / n2 : "Can't divide by 0";
      break;
  }

  result.textContent = res;
}

// Event listeners
addBtn.addEventListener('click', () => calculate('+'));
subBtn.addEventListener('click', () => calculate('-'));
mulBtn.addEventListener('click', () => calculate('*'));
divBtn.addEventListener('click', () => calculate('/'));
clearBtn.addEventListener('click', () => {
  num1.value = '';
  num2.value = '';
  result.textContent = 0;
});
