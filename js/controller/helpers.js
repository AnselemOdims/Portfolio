const main = document.querySelector('main');
const hide = document.querySelectorAll('.hide');

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

export const findItem = (target, model) => {
  const { btnId } = target.dataset;
  return model.find((elem) => elem.id === parseInt(btnId, 10));
};

export const showErr = (message) => {
  document.querySelector('small').innerText = message;
};

export const showSuccess = (small) => {
  small.innerHTML = '';
};

export const show = (classes, error, success) => {
  classes.remove(success);
  classes.add(error);
};
