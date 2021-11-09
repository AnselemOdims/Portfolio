import {
  clickHandler,
  hamburger,
  navList,
  activeHandler,
} from './utils.js';

// hamburger toggle
hamburger.addEventListener('click', clickHandler);

// nav list active toggle
navList.forEach((item) => {
  item.addEventListener('click', activeHandler);
});
