const menu = document.querySelector('.navbar-menu');
const hamburgerMenu = document.querySelector('.navbar-burger');

const dropdown = document.querySelector('.dropdown');

hamburgerMenu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
});

dropdown.addEventListener('hover', function() {
  dropdown.classList.toggle('is-active');
});
