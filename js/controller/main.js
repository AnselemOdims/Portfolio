import {
  clickHandler, hamburger, navList, activeHandler, btns,
} from './utils.js';

import modalHandler from './popup.js';

import {
  inputs, formHandler, form, blurHandler,
} from './helpers.js';

// hamburger toggle
hamburger.addEventListener('click', clickHandler);

// nav list active toggle
navList.forEach((item) => {
  item.addEventListener('click', activeHandler);
});

// handle button click for modal popup
btns.forEach((btn) => btn.addEventListener('click', modalHandler));

inputs.forEach((input) => {
  input.addEventListener('blur', blurHandler);
});

form.addEventListener('submit', formHandler);

autoFill()

