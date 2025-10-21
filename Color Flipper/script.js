const btn = document.getElementById('btn');
const colorCode = document.getElementById('color-code');

btn.addEventListener('click', () => {
  // Generate random hex color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  
  // Change background color
  document.body.style.backgroundColor = randomColor;
  
  // Display current color code
  colorCode.textContent = randomColor;
});
