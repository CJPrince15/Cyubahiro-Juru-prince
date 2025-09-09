const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  // Check if the clicked element is the 'next' button
  if (e.target.matches('.next')) {
    // Move the first item to the end
    slider.append(items[0]);
  }
  // Check if the clicked element is the 'prev' button
  if (e.target.matches('.prev')) {
    // Move the last item to the beginning
    slider.prepend(items[items.length - 1]);
  }
}

// Listen for clicks anywhere on the page
document.addEventListener('click', activate, false);
