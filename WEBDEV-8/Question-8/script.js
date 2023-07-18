// Get the necessary elements
var counterElement = document.getElementById('counter');
var incrementBtn = document.getElementById('incrementBtn');
var decrementBtn = document.getElementById('decrementBtn');
var resetBtn = document.getElementById('resetBtn');

// Set the initial counter value
var counter = 0;
counterElement.textContent = counter;

// Add event listeners to the buttons
incrementBtn.addEventListener('click', function() {
  counter++;
  counterElement.textContent = counter;
});

decrementBtn.addEventListener('click', function() {
  counter--;
  counterElement.textContent = counter;
});

resetBtn.addEventListener('click', function() {
  counter = 0;
  counterElement.textContent = counter;
});