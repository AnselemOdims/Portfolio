import {
  clickHandler, hamburger, navList, activeHandler, btns,
} from './utils.js';

import modalHandler from './popup.js';

import {
  inputs, formHandler, form, blurHandler, autoFill,
} from './helpers.js';

// hamburger toggle
hamburger.addEventListener('click', clickHandler);

// nav list active toggle
navList.forEach((item) => {
  item.addEventListener('click', activeHandler);
});

// handle button click for modal popup
btns.forEach((btn) => btn.addEventListener('click', modalHandler));

// handles the blur event for the inputs
inputs.forEach((input) => {
  input.addEventListener('blur', blurHandler);
});

// handles the form validation for the submit event
form.addEventListener('submit', formHandler);

// auto fills the inputs with available data in the local storage
autoFill();
