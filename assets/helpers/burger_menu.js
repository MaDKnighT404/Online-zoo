export function activeBurgerMenu () {
  const wrapper = document.querySelector('.header__wrapper');
  const logo = document.querySelector('.logo');
  const navigation = document.querySelector('.navigation');
  const menu = document.querySelector('.menu');
  const burgerMenu = document.querySelector('.burger__menu');
  const burgerLines = document.querySelectorAll('.burger__line');
  const substrate = document.querySelector('.substrate__menu');
  const menuItems = document.querySelectorAll('.menu__item');

  function toggleBurgerMenu () {
    substrate.classList.toggle('active__substrate__menu');
    navigation.classList.toggle('active__navigation');
    wrapper.classList.toggle ('wrapper__active');
    burgerMenu.classList.toggle('burger__menu__active');
    menu.classList.toggle('menu__active');
    logo.classList.toggle('logo__active');
    burgerLines.forEach(elem => elem.classList.toggle('burger__line__active'));
    menuItems.forEach(elem =>  elem.classList.toggle('menu__item__active'));
    
    if (burgerMenu.classList.contains('burger__menu__active')) {
    burgerLines[0].style.transform = 'rotate(45deg)';
    burgerLines[1].style.transform = 'rotate(135deg)';
    burgerLines[1].style.marginTop = '-4px';
    burgerLines[2].style.background = '#fff';

   } else {
    burgerLines[0].style.transform = 'rotate(0deg)';
    burgerLines[1].style.transform = 'rotate(0deg)';
    burgerLines[1].style.marginTop = '0px';
    burgerLines[2].style.background = '#fff';
   }
  }
  burgerMenu.addEventListener('click', toggleBurgerMenu);
  substrate.addEventListener('click', toggleBurgerMenu);
}

