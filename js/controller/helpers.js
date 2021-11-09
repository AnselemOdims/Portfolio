const main = document.querySelector('main');
const hide = document.querySelectorAll('.hide');

export default function helperFunc(blur, list, display, left) {
  main.style.filter = blur;
  hide.forEach((el) => {
    el.style.display = display;
  });
  list.style.left = left;
}
