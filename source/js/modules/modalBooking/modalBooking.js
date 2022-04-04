import {body, overlay} from '../menu-mobile/menu-mobile.js';

const cruises = document.querySelectorAll('[data-cruise]');
const modalBooking = document.querySelector('[data-booking]');
const modalBookingClose = modalBooking.querySelector('[data-booking--close]');
let scroll = 0;


// Открытие popup
const showModalBooking = () => {
  scroll = window.pageYOffset;
  modalBooking.classList.add('open');
  body.classList.add('page__body--overlay');
  overlay.classList.remove('visually-hidden');
  overlay.classList.add('page__overlay');
  document.addEventListener('keydown', hideModalBookingESC);
  modalBookingClose.addEventListener('click', hideModalBooking);
  modalBooking.addEventListener('click', hideModalBookingClickPast);
};

// Открытие popup клавишей "пробел" или "Enter"
const hideModalBookingKey = (evt) => {
  cruises.forEach((cruise) => {
    cruise.classList.contains('cruise--active');
    if (evt.which === 32 && cruise.classList.contains('cruise--active') || evt.which === 13 && cruise.classList.contains('cruise--active')) {
      modalBooking.classList.add('open');
      body.classList.add('page__body--overlay');
      overlay.classList.remove('visually-hidden');
      overlay.classList.add('page__overlay');
    }
  });
};


// Закрытие popup
const hideModalBooking = () => {
  window.scrollTo(0, scroll);
  modalBooking.classList.remove('open');
  body.classList.remove('page__body--overlay');
  overlay.classList.remove('page__overlay');
  overlay.classList.add('visually-hidden');
  document.removeEventListener('keydown', hideModalBookingESC);
  modalBookingClose.removeEventListener('click', hideModalBooking);
  modalBooking.removeEventListener('click', hideModalBookingClickPast);
};

// Закрытие popup клавишей ESC
const hideModalBookingESC = (evt) => {
  if (evt.which === 27) {
    window.scrollTo(0, scroll);
    modalBooking.classList.remove('open');
    body.classList.remove('page__body--overlay');
    overlay.classList.remove('page__overlay');
    overlay.classList.add('visually-hidden');
    document.removeEventListener('keydown', hideModalBookingESC);
    modalBookingClose.removeEventListener('click', hideModalBooking);
    modalBooking.removeEventListener('click', hideModalBookingClickPast);
  }
};

// Закрытие popup кликом мыши в произвольной области
const hideModalBookingClickPast = (evt) => {
  if (!evt.target.closest('.popup-booking__wrapper')) {
    window.scrollTo(0, scroll);
    modalBooking.classList.remove('open');
    body.classList.remove('page__body--overlay');
    overlay.classList.remove('page__overlay');
    overlay.classList.add('visually-hidden');
  }
};


function manageModalBooking(cruise) {
  const button = cruise.querySelector('[data-button]');

  cruise.addEventListener('mouseover', function () {
    cruise.classList.add('cruise--active');
    button.addEventListener('mouseover', function () {
      button.classList.add('a--hover');
      button.addEventListener('click', showModalBooking);

      button.addEventListener('mousedown', function () {
        button.classList.add('a--active');
        button.addEventListener('click', showModalBooking);
      });
      button.addEventListener('mouseup', function () {
        button.classList.remove('a--active');
      });
    });
    button.addEventListener('mouseout', function () {
      button.classList.remove('a--hover');
    });
  });
  cruise.addEventListener('mouseout', function () {
    cruise.classList.remove('cruise--active');
  });

  cruise.onfocus = function () {
    cruise.classList.add('cruise--active');
    button.classList.add('a--focus');
    document.addEventListener('keydown', hideModalBookingKey);
    document.addEventListener('keydown', hideModalBookingESC);
    modalBookingClose.addEventListener('click', hideModalBooking);
    modalBooking.addEventListener('click', hideModalBookingClickPast);
  };
  cruise.onblur = function () {
    cruise.classList.remove('cruise--active');
  };
}


export {cruises, manageModalBooking};
