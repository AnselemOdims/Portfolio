const main = document.querySelector('main');
const hide = document.querySelectorAll('.hide');
export const inputs = document.querySelectorAll('input, textarea');
export const form = document.querySelector('.contact-form form');
const small = document.querySelector('small');

/**
 *@function {helperFunc} helperFunc
 * @param {string} blur The blur filter
 * @param {HTMLElement} list The list or element to apply style to
 * @param {string } display The display value of the hide element
 * @param {string} left  The left position
 */
export const helperFunc = (blur, list, display, left) => {
  main.style.filter = blur;
  hide.forEach((el) => {
    el.style.display = display;
  });
  list.style.left = left;
};

/**
 * @function findItem Handles finding an object from an array of objects
 * @param {HTMLElement} target The HTML element to be targetted
 * @param {Array} model An array of objects
 * @returns {Object} The object found in the array
 */
export const findItem = (target, model) => {
  const { btnId } = target.dataset;
  return model.find((elem) => elem.id === parseInt(btnId, 10));
};

/**
 *
 * @param {string} message The error message to be shown
 */
export const showErr = (message) => {
  document.querySelector('small').innerText = message;
};

/**
 *
 * @param {HTMLSmallElement} small The HTML small element that outputs the error
 */
export const showSuccess = (small) => {
  small.innerHTML = '';
};

/**
 *
 * @param {classList} classes The classlist of an element
 * @param {string} error The error string
 * @param {string} success The success string
 */
export const show = (classes, error, success) => {
  classes.remove(success);
  classes.add(error);
};

// Regex to check if the input include a uppercase case letter
const re = /[A-Z]/g;

/**
 * @function formHandler Handles the validation on the form submit event
 * @param {event} e The event object
 */
export const formHandler = (e) => {
  const [name, email, message] = [
    inputs[0].value.trim(), inputs[1].value.trim(), form.elements[2].value.trim(),
  ];
  if (name === '' || name.length < 5) {
    e.preventDefault();
    showErr('Name should be at least 5 characters long');
  } else if (email === '' || /[A-Z]/.test(email)) {
    e.preventDefault();
    showErr('Email should contain only lowercase characters');
  } else if (message === '' || message.length < 5) {
    e.preventDefault();
    showErr('Message should not be empty');
  } else {
    showSuccess(small);
    form.submit();
  }
};

/**
 * @function blurHandler Handles the blur event
 * @param {event} e The event object
 */
export const blurHandler = (e) => {
  const [target, value, classes] = [
    e.currentTarget.type,
    e.currentTarget.value,
    e.currentTarget.classList,
  ];

  if ((target === 'text' && value.length < 5) || value === '') {
    show(classes, 'error', 'success');
  } else if ((target === 'email' && re.test(value)) || value === '') {
    show(classes, 'error', 'success');
  } else if (target === 'textarea' && (value === '' || value.length < 5)) {
    show(classes, 'error', 'success');
  } else {
    show(classes, 'success', 'error');
  }
};
