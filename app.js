const close = document.querySelector('.close');
const menuBars = document.querySelector('.menu-bars');

function showMobileMenu() {
  const menu = document.querySelector('#mobile-nav');
  menu.style.display = 'block';
}

function hideMobileMenu() {
  const close = document.querySelector('#mobile-nav');
  close.style.display = 'none';
}

menuBars.addEventListener('click', showMobileMenu());
close.addEventListener('click', hideMobileMenu());