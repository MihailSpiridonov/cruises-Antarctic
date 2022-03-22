const menuNav = document.querySelector('[data-header]');
const buttonHumburger = document.querySelector('[data-button-toggle]');


const openMenu = () => {
  if (menuNav.classList.contains('header--close')) {
    menuNav.classList.remove('header--close');
    menuNav.classList.add('header--open');
    buttonHumburger.classList.remove('button-toggle--close');
    buttonHumburger.classList.add('button-toggle--open');
  } else {
    menuNav.classList.add('header--close');
    menuNav.classList.remove('header--open');
    buttonHumburger.classList.remove('button-toggle--open');
    buttonHumburger.classList.add('button-toggle--close');
  }
};


export {buttonHumburger, menuNav, openMenu};
