const menu = document.querySelector('.navbar-menu');
const hamburgerMenu = document.querySelector('.navbar-burger');

hamburgerMenu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
});
