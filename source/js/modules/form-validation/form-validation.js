const form = document.querySelector('[data-form]');

function formSend(event) {
  event.preventDefault();
  let err = formValidate(form);

  if (err === 0) {
    // eslint-disable-next-line no-alert
    alert('GREAT');
    form.reset();
  } else {
    // eslint-disable-next-line no-alert
    alert('WARNING');
  }
}

function formValidate(element) {
  let error = 0;
  let formRequired = element.querySelectorAll('[required]');

  for (let i = 0; i < formRequired.length; i++) {
    const input = formRequired[i];
    formRemoveError(input);

    if (input.getAttribute('type') === 'email') {
      if (emailTest(input)) {
        formAddError(input);
        error++;
      }
    } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
      formAddError(input);
      error++;
    } else {
      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}

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


export {form, formSend};
