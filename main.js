// Find the lightbulb button by its ID
const overlayBtn = document.getElementById('overlay-btn');

// Find the <body> tag in shop.html
const bodyElement = document.body;

//the addEventListener will wait for the users to click it
overlayBtn.addEventListener('click', function() {
  
  // toggle the overlay off
  bodyElement.classList.toggle('no-overlay');
  
});