import cardModel from '../model/cardModel.js';
import { findItem } from './helpers.js';

/**
 *
 * @function modalHandler
 * @param {event} e
 * @description {handles modal popup}
 */
export default function modalHandler(e) {
  const card = findItem(e.currentTarget, cardModel); // find the item in the model
  const {
    imgSrc,
    header,
    authorLang,
    authorList1,
    authorList2,
    para,
    langList1,
    langList2,
    langList3,
    langList4,
    link1,
    link2,
  } = card;
  const modal = document.createElement('section');
  modal.className = 'modal';
  modal.innerHTML = `
  <div class="card modal-card">
  <div class="card-details">
  <header>
    <h2>${header}</h2>
    <img src="assets/images/icons/close_black.svg" alt="close icon" id="closeImg"/>
  </header>
  <div class="author-lang">
    <span>${authorLang}</span>
    <ul>
      <li>${authorList1}</li>
      <li>${authorList2}</li>
    </ul>
  </div>
  <figure>
    <img
      src=${imgSrc}
      alt="project image"
    />
  </figure>
  <div class="card-flex">
  <p class="project-desc">${para}</p>
  <div class="contain">
  <ul class="project-lang">
    <li>${langList1}</li>
    <li>${langList2}</li>
    <li>${langList3}</li>
    <li class="optional">${langList4}</li>
  </ul>
  <hr />
  <div class="action-btn">
    <button class="project-btn" type="button">
      <a href="" target="_blank">See live <img src="assets/images/icons/live.svg" /></a>
    </button>
    <button class="project-btn" type="button">
      <a href=${link2} target="_blank">See Source <img src="assets/images/icons/git.svg" /></a>
    </button>
    </div>
    </div>
    </div>
  </div>
  </div>
`;
  // check if language list is more than 3
  if (!langList4) {
    modal.querySelector('.optional').style.display = 'none';
  }
  document.querySelector('body').insertAdjacentElement('afterbegin', modal);
  modal.querySelector('#closeImg').addEventListener('click', () => modal.remove());
}