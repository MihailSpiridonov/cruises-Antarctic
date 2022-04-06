import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {buttonHumburger, menuNav, openMenu, openMenuKey} from './modules/menu-mobile/menu-mobile.js';
import {form, formSend} from './modules/form-validation/form-validation.js';
import {cruises, manageModalBooking} from './modules/ModalBooking/ModalBooking.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();


  // Модальное окно
  if (cruises.length > 0) {
    for (let i = 0; i < cruises.length; i++) {
      const cruise = cruises[i];
      manageModalBooking(cruise);
    }
  }


  // Меню (навигация)
  menuNav.classList.remove('header--nojs');
  menuNav.classList.add('header--close');
  buttonHumburger.classList.add('button-toggle--close');
  buttonHumburger.addEventListener('click', openMenu);
  document.addEventListener('keydown', openMenuKey);


  // Form validation
  form.addEventListener('submit', formSend);


  // Плавный скролл по якорям из навигации
  const anchors = document.querySelectorAll('[data-nav-link]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  // Modules

  // Utils


  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
