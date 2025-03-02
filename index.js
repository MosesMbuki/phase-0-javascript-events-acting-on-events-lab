// Select the DODGER element
const dodger = document.getElementById('dodger');

// Function to move the DODGER to the left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', ''); 
  const left = parseInt(leftNumbers, 10); 

  // Move the DODGER to the left, but not beyond the left edge
  if (left > 0) {
    dodger.style.left = `${left - 10}px`; 
  }
}

// Function to move the DODGER to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', ''); 
  const left = parseInt(leftNumbers, 10);

  // Move the DODGER to the right, but not beyond the right edge
  const gameWidth = 400; 
  const dodgerWidth = 40; 
  if (left + dodgerWidth < gameWidth) {
    dodger.style.left = `${left + 10}px`; 
  }
}

// Bind event listeners to the arrow keys
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});