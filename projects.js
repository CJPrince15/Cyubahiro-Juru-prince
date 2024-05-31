const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);


document.getElementById('open1').addEventListener('click', function() {
  window.location.href = 'https://www.thecactusinn.com/';
});
document.getElementById('open2').addEventListener('click', function() {
  window.location.href = 'https:https://nuvisionhighschool.com/';
});
document.getElementById('open3').addEventListener('click', function() {
  window.location.href = 'https://codepen.io/CJPrince';
});
