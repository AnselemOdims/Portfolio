import helperFunc from './helpers.js';

export const hamburger = document.querySelector('.toggle');
// export const btns = document.querySelectorAll(".btn");
export const dropDown = document.querySelector('lang-dropdown');
const navMenu = document.querySelector('header > nav > .hamburger');

/**
 * @function {clickHandler}
 * @param {click} e
 * @description handles the opening and closing of the hamburger mobile menu
 */
export const clickHandler = (e) => {
  e.preventDefault();
  navMenu.insertAdjacentHTML(
    'beforeend',
    `
    <div class="hamburger-mobile-menu ">
        <div class="close">
          <img src="assets/images/icons/close_white.svg" />
        </div>
        <ul>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    `,
  );
  const menuList = document.querySelector('.hamburger-mobile-menu');
  helperFunc('blur(15px)', menuList, 'none', 0);
  const closer = document.querySelector('.close');
  closer.addEventListener('click', () => helperFunc('blur(0)', menuList, 'block', '770px'));
};
