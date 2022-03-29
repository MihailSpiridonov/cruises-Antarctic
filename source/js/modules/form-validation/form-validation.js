const form = document.querySelector('[data-form]');


// Add class
function formAddError(input) {
  input.parentElement.classList.add('error');
  input.classList.add('error');
}

// Remove class
function formRemoveError(input) {
  input.parentElement.classList.remove('error');
  input.classList.remove('error');
}

// Test email
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


function formValidate(element) {
  let error = 0;
  let formRequired = element.querySelectorAll('[required]');

  if (formRequired.length > 0) {
    for (let i = 0; i < formRequired.length; i++) {
      formRemoveError(formRequired[i]);

      if (formRequired[i].getAttribute('type') === 'email') {
        if (emailTest(formRequired[i])) {
          formAddError(formRequired[i]);
          error++;
        }
      } else if (formRequired[i].getAttribute('type') === 'checkbox' && formRequired[i].checked === false) {
        formAddError(formRequired[i]);
        error++;
      } else {
        if (formRequired[i].value === '') {
          formAddError(formRequired[i]);
          error++;
        }
      }
    }
  }
  return error;
}


function formSend(evt) {
  evt.preventDefault();
  let error = formValidate(form);

  if (error === 0) {
    // eslint-disable-next-line no-alert
    alert('GREAT');
    form.reset();
  } else {
    // eslint-disable-next-line no-alert
    alert('WARNING');
  }
}


export {form, formSend};
