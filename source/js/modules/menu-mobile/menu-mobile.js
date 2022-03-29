const menuNav = document.querySelector('[data-header]');
const nav = menuNav.querySelector('[data-nav]');
const menuLink = menuNav.querySelectorAll('[data-nav-link]');
const buttonHumburger = menuNav.querySelector('[data-button-toggle]');
const body = document.querySelector('[data-body]');

function showMenu() {
  menuNav.classList.remove('header--close');
  menuNav.classList.add('header--open');
  buttonHumburger.classList.remove('button-toggle--close');
  buttonHumburger.classList.add('button-toggle--open');
  body.classList.add('page__body--overlay');
  nav.classList.add('nav--overlay');
}

function hideMenu() {
  menuNav.classList.add('header--close');
  menuNav.classList.remove('header--open');
  buttonHumburger.classList.remove('button-toggle--open');
  buttonHumburger.classList.add('button-toggle--close');
  body.classList.remove('page__body--overlay');
  document.body.style.overflow = '';
}

const openMenu = () => {
  if (menuNav.classList.contains('header--close')) {
    showMenu();
    for (let i = 0; i < menuLink.length; i++) {
      menuLink[i].addEventListener('click', hideMenu);
    }
  } else {
    hideMenu();
  }
};

buttonHumburger.onfocus = function () {
  buttonHumburger.classList.add('button-toggle--focus');
};
buttonHumburger.onblur = function () {
  buttonHumburger.classList.remove('button-toggle--focus');
};

const openMenuKey = (evt) => {
  if (evt.which === 32 && menuNav.classList.contains('header--close') && buttonHumburger.classList.contains('button-toggle--focus') || evt.which === 13 && menuNav.classList.contains('header--close') && buttonHumburger.classList.contains('button-toggle--focus')) {
    showMenu();
    for (let i = 0; i < menuLink.length; i++) {
      menuLink[i].addEventListener('click', hideMenu);
    }
  }
};

const closeMenuKey = (evt) => {
  if (evt.which === 27 && menuNav.classList.contains('header--open')) {
    hideMenu();
    for (let i = 0; i < menuLink.length; i++) {
      menuLink[i].addEventListener('click', hideMenu);
    }
  }
};


export {buttonHumburger, menuNav, body, openMenu, openMenuKey, closeMenuKey};
