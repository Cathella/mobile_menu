const close = document.querySelector('.close');
const menuBars = document.querySelector('.menu-bars');
const menu = document.querySelector('#mobile-nav');

function showMobileMenu() {
  menu.style.display = 'block';
}

function hideMobileMenu() {
  menu.style.display = 'none';
}

menuBars.addEventListener('click', showMobileMenu());
close.addEventListener('click', hideMobileMenu());