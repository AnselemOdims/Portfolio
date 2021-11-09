const main = document.querySelector('main');
const hide = document.querySelectorAll('.hide');

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
